# Baraa Jadaan — Full Background Reference (for portfolio update)

This is a complete, unfiltered dump of experience, skills, and projects — more than any single resume would include. Pick and choose what fits the portfolio site; not everything here needs to go live.

## Contact & Links

- Phone: +963 997 748 481
- Email: braajad1@gmail.com
- GitHub: github.com/BaraaJadaan
- LinkedIn: linkedin.com/in/baraa-jadaan
- Portfolio: https://baraajadaan.github.io/portfolio/
- Live demo — Arabic Poetry RAG Agent ("باحث الشعر العربي"): baraajadaan.github.io/poetry-rag/
- Based in Syria. Bilingual Arabic (native) / English (B2, TOEFL). German A2.

## Education

Bachelor of Engineering in Artificial Intelligence and Information Technology — Damascus University

## Work Experience (reverse chronological)

### End-to-End Software Engineer / Mobile Frontend Developer — Rafeek Darbak (Feb 2026 – Present)

Own the Flutter-based mobility app **"Rafiq Darbak" (رفيق دربك)** end to end.

- Built and shipped across iOS and Android: iOS via Codemagic and App Store Connect (TestFlight, production build-numbering, and a fix for an `Info.plist` notification-communication entitlement issue); Android via Google Play Console.
- Built and maintain CI pipelines and the platform's admin panel.
- Resolved production issues: iOS entitlements, pricing/stop-point logic bugs.
- Shipped major features: voice messaging, real-time messaging, live location sharing, radius-based matching, an Explore screen.
- Backend: Supabase (PostgreSQL) for data storage, authentication, and Row-Level Security (RLS) policies — including debugging RLS policy bugs.
- Implemented Shorebird over-the-air (OTA) updates for rapid Dart-only patch releases without full App Store review.
- Authored bilingual (Arabic/English) release notes across many releases.
- Also manages social media for رفيق دربك (marketing/content side of the same product).

### Frontend Developer — TabTabGo (Oct 2024 – Feb 2026)

Agency/software house building custom platforms for external clients.

- **Sole frontend developer** on a Customer & Network Management Suite for a Danish ISP — built the admin portal and web onboarding portal in React.js, plus a companion React Native mobile app.
- Ran direct client calls to gather and refine requirements (client-facing role, not just delivery).
- Integrated RESTful APIs and managed client-side application state for a responsive, production-grade platform used daily by ISP staff and customers.
- Contributed frontend/dashboard development to a multi-platform **Social Monitoring & Dashboard** product — a social-listening and analytics engine tracking talent and campaign performance — as part of a broader system re-architecture.
- Delivered comparable frontend builds for several other agency clients across other industries.
- Picked up select backend tasks in **C#/.NET** during the final months of the engagement (beyond primary frontend scope).

### Frontend Developer — ATC Systematic (Rafeed) (Dec 2023 – Aug 2024)

Rafeed is ATC Systematic's consumer lighting brand; ATC Systematic also builds **Lumytic**, their ERP product line for the lighting industry.

- Built the frontend for the public Lumytic marketing website.
- Built frontend interfaces for the **Lumytic CMS** and **Lumytic CRM** systems used by lighting manufacturers/distributors to manage products, content, and customer relationships.
- Focus on modular, reusable components shared across the three surfaces (site, CMS, CRM).

_Note: there is a real ~2-month gap between ATC Systematic (ends Aug 2024) and TabTabGo (starts Oct 2024) — not an error._

## Featured AI/ML Projects

### Arabic Poetry Semantic Search & RAG Agent ("باحث الشعر العربي")

**Live**: baraajadaan.github.io/poetry-rag/ — a working, deployed product, not just a repo.

- **Domain/dataset**: arbml/ashaar dataset (~254K rows originally). Key structural finding: the `poem verses` field stores hemistichs (half-lines) requiring consecutive-pair chunking to reconstruct full verses.
- **Data cleaning pipeline**: dropped empty poems; dropped colloquial/عامي and شعبي poetry to protect the classical-only search index; kept فصيح (classical) poetry _and_ the 28% of the dataset with no language tag at all (dropping those would have discarded huge amounts of real classical poetry); paired half-lines into verses while deliberately keeping "orphan" unpaired half-lines rather than discarding them; stripped diacritics for the search index but preserved them in the display text (search without diacritics, get back fully-voweled poetry).
- **Embedding layer**: benchmarked a local `voyage-4-nano` GGUF model; found and fixed a KV-cache contamination bug in `llama-cpp-python`; ran a golden-set evaluation that showed 0% semantic recall with the local nano embedder (it couldn't map Arabic synonyms); re-architected around **Qwen3-Embedding**, lifting semantic Recall@1 to ~90%. Cloud deployment uses `qwen/qwen3-embedding-8b` via OpenRouter; local/Windows deployment uses Voyage.
- **Retrieval**: hybrid architecture — dense vector search + BM25 keyword search (via Tantivy's full-text index) + Reciprocal Rank Fusion to combine them. IVF/PQ indexing keeps search over 3.4M verses under ~500ms.
- **Vector store**: indexed all 3.4M verses under deterministic SHA-256 verse IDs (fully resumable indexing job). Started on ChromaDB, but its background compaction thread broke under GPU write load — pivoted to **LanceDB**, an on-disk columnar store with no fragile compaction loop.
- **Agentic orchestration layer**: a native multi-tool ReAct loop built directly on `llama-cpp-python` (deliberately no LangChain/LlamaIndex) giving a local model tool-calling access to: `search_verses`, `analyze_meter`, `gloss_vocabulary`. Local generation model: `unsloth/Qwen3.5-2B-MTP-GGUF` (fast on ARM CPU for the cloud deployment); dual-toggle architecture (`USE_OPENROUTER_EMBED`, `AGENT_MODEL_PATH`) switches cleanly between fully local/air-gapped inference and OpenRouter-backed inference without touching core orchestration logic.
- **Backend**: FastAPI with Server-Sent Events (SSE) for token streaming.
- **Frontend**: hand-built, RTL-aware, bilingual (Arabic/English) vanilla HTML/CSS/JS interface — no framework — with live streaming chat UI.
- **MLOps/deployment**: multi-stage Docker build optimized for Oracle Cloud's Always Free ARM instances; resolved dependency conflicts by mapping OS-specific wheels in `pyproject.toml`; an `ngrok` sidecar container exposes the API over HTTPS without configuring Virtual Cloud Network (VCN) firewall rules; GitHub Actions CI runs a deterministic LanceDB retrieval fixture and builds the Docker image on every push; MLflow tracks retrieval experiments (embedding config, corpus/table identity, Recall@k, MRR, latency, JSON report).
- **Static/dynamic split**: GitHub Pages serves the static frontend; the Oracle-hosted FastAPI backend (CORS-locked to the Pages origin) handles retrieval, streaming chat, and the OpenRouter key.
- **Cloud corpus**: curated down to a ~350k-verse subset (a 40-poet whitelist plus a completeness filter — the only technique that actually shrinks the corpus, to ~10% of full size) while keeping all 18 golden-eval verses retrievable, at ~6–10 hours of embedding time and ~1.5–2GB on the free tier.

### Arabic Poetry Meter (بحر) Classification — LLM Fine-Tuning

_Still being refined — treat any numbers below as provisional/in-progress, not final benchmarks._

- Fine-tuned **Qwen2.5-7B-Instruct** using **QLoRA** (rank-16 adapter on attention + MLP projection layers) via **Unsloth** (4-bit quantization), with TRL's `SFTTrainer`, PEFT, and bitsandbytes.
- Data: `train_data.jsonl`, split into a held-out test set and a training set, reformatted into the ChatML template.
- Baseline: the untrained base model responded with long hedging paragraphs instead of a clean meter label — showed the problem was as much about response _format_ as knowledge.
- Trained for full epochs (not a fixed step count) so the model would fully learn the answer format.
- Built a reproducible evaluation harness: accuracy, macro-F1, balanced accuracy, per-meter recall, invalid-output rate, run against a held-out verse split; also audited the dataset for duplicate/leakage issues.
- Export: merged the LoRA adapter into the base weights and quantized to GGUF for lightweight local inference; worked around a Google Drive 0-byte sync crash in Colab by staging the export locally before transferring.
- Inference sanity check: correctly classified a fresh, unseen verse as **بحر الطويل** — confirmed the merged, quantized model works end-to-end outside the training loop.

## Frontend / Full-Stack Personal Projects

- **Filmora** — movie discovery portal. React, Redux, Material UI, TMDB API. Auth-gated wishlist functionality.
- **Gamer Wiki** — games discovery portal. React, React Query (server-state caching), Zustand (client state), RAWG API. Filter by popularity/release date.
- **OneForAll** — e-commerce site. React, Redux. Product browsing, purchases, points-based billing system.
- **Stocks** — real-time stock price tracker + financial news. React, Alpha Vantage API.

## Earlier ML / Data Projects (academic / early portfolio)

- **Breast Cancer Detection** — supervised ML models for classification.
- **Medical Data Analysis** — cleaned, analyzed, and classified thousands of real questions from an online medical-advice platform.
- **Grammar Correction with Transformers** — fine-tuned a pre-trained transformer model to correct grammar in user-submitted text.
- **Arabic Named Entity Recognition (NER)** — sequence labeling using statistical, ML, and deep-learning approaches.
- **Chicago Traffic Crashes Analysis** — exploratory data analysis and preprocessing on a real-world dataset.
- **Sound Classification for Hearing-Impaired Mothers** — audio classification (baby crying, door knocking, glass breaking) for an assistive alerting system.
- **Online Exam Cheating Detection (Graduation Project)** — head-pose estimation, face recognition, eye tracking, and object detection to flag cheating during online exams.

## Other Technical Work & Exploration

- **Build to Learn** — a Claude Skill Baraa built and released publicly on GitHub: a developer learning tool that generates portfolio projects alongside three companion HTML documents (concepts, Q&A, walkthrough) to make builders interview-ready. Iterated on real failure modes found in testing.
- **AI literacy curriculum** — HTML lesson artifacts covering RAG, embeddings, chunking, and Claude API usage.
- **ComfyUI Desktop on Windows (RTX 4060, 8GB VRAM)** — set up GGUF-quantized Ideogram-4 image-generation workflows; resolved GGUF node-pack issues and a `cudaMallocAsync` crash (`--disable-cuda-malloc`); upgraded to `UnetLoaderGGUFAdvanced` with `dequant_dtype: target`.
- **React Native / React admin panel / Supabase monorepo exploration** — prototyped using Turborepo, Expo Router, and Claude Code with a spec-driven development methodology.
- **Counter-drone detection/classification concept** — explored as a portfolio idea: RF signature, acoustic, vision-based, and sensor-fusion layers, scoped strictly to defensive/detection use. (Concept-stage exploration, not a shipped project — optional for a public portfolio.)
- **"Vibe-coding" / agentic dev methodology** — monorepo structuring, Claude Code Agent Teams parallelization, `CLAUDE.md` as persistent project context, PostToolUse quality-gate hooks.
- Troubleshot Oracle Cloud SSH access issues (publickey rejection, server-side `authorized_keys` fixes).

## Non-Technical / Content Work (optional — may not fit a technical portfolio)

- Manages social media for رفيق دربك (Rafiq Darbak).
- Translated ride-sharing app changelogs from English into professional Arabic (admin panel + mobile features).
- Produced an Arabic Islamic theology summary from a source PDF (fitrah, tawhid, dawah methodology).
- Built a 26-slide Arabic PowerPoint on the "أتومن" (ATOMN) dawah framework, with careful RTL layout and Arabic typography/punctuation handling.
- Built formatted Arabic Excel student-roster files (openpyxl): RTL layout, conditional cell coloring, multi-class organization.

## Comprehensive Skills Matrix

**Frontend**: React.js, React Native, Flutter, TypeScript, JavaScript (ES6+), HTML5, CSS3, Dart, Redux, Zustand, React Query, Tailwind CSS, Material UI, GSAP, responsive design, RTL layout

**Backend**: FastAPI (Python), C#/.NET, Supabase (PostgreSQL, Auth, Row-Level Security)

**AI / ML / NLP**: PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, Unsloth, PEFT, TRL, bitsandbytes, LoRA/QLoRA fine-tuning, GGUF quantization, llama-cpp-python

**LLM / GenAI Engineering**: RAG architecture, agentic tool-calling (ReAct-style, raw API — not framework-dependent), prompt engineering, Claude API, Qwen model family, OpenRouter API

**Retrieval / Search**: LanceDB, ChromaDB, ANN indexing (IVF/PQ), BM25 (Tantivy), Reciprocal Rank Fusion, embedding models (Voyage AI, Qwen-Embedding)

**MLOps / DevOps**: Docker (multi-stage builds), GitHub Actions CI/CD, MLflow, uv (Python packaging), Git (branching, pull requests, code review)

**Cloud / Infra / Deployment**: Oracle Cloud (Always Free ARM tier), ngrok, GitHub Pages, Codemagic, Google Play Console, App Store Connect, Shorebird (Flutter OTA updates)

**Data**: Python, Pandas, NumPy, SQL, data cleaning/preprocessing, exploratory data analysis

**Other tools**: ComfyUI (Stable Diffusion / Ideogram GGUF workflows), openpyxl, Claude Code, Claude Skills authoring

**Languages (human)**: Arabic (Native), English (B2, TOEFL), German (A2)
