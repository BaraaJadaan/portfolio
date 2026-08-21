import os
import fitz # PyMuPDF
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def create_resume_pdf(filename, header_data, sections):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#1A1A1A")
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10.5,
        leading=14,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#333333")
    )
    
    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#555555")
    )
    
    section_title_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor("#222222"),
        spaceBefore=8,
        spaceAfter=3
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor("#2B2B2B")
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_LEFT,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.HexColor("#2B2B2B")
    )
    
    story = []
    
    # Header
    story.append(Paragraph(header_data['name'], title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph(header_data['subtitle'], subtitle_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph(header_data['contact'], contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor("#CCCCCC"), spaceAfter=6))
    
    for sec in sections:
        story.append(Paragraph(sec['title'], section_title_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#E0E0E0"), spaceAfter=4))
        for item in sec['items']:
            if item['type'] == 'paragraph':
                story.append(Paragraph(item['text'], body_style))
                story.append(Spacer(1, 4))
            elif item['type'] == 'bullet':
                story.append(Paragraph(f"• {item['text']}", bullet_style))
                story.append(Spacer(1, 2))
            elif item['type'] == 'subheading':
                sub_style = ParagraphStyle(
                    'SubHeading',
                    parent=styles['Normal'],
                    fontName='Helvetica-Bold',
                    fontSize=9,
                    leading=12,
                    textColor=colors.HexColor("#222222")
                )
                story.append(Paragraph(item['text'], sub_style))
                story.append(Spacer(1, 2))
            elif item['type'] == 'role':
                r_style = ParagraphStyle(
                    'RoleStyle',
                    parent=styles['Normal'],
                    fontName='Helvetica-Bold',
                    fontSize=8.8,
                    leading=12,
                    textColor=colors.HexColor("#222222")
                )
                story.append(Paragraph(f"{item['role']} <font color='#666666' name='Helvetica'>({item['dates']})</font>", r_style))
                story.append(Spacer(1, 2))
        story.append(Spacer(1, 4))
        
    doc.build(story)
    print(f"Generated {filename}")

# Define Frontend Resume
frontend_header = {
    'name': "BARAA JADAAN",
    'subtitle': "Frontend Developer | React.js & TypeScript | Component-Driven UI",
    'contact': "+963 997 748 481 &nbsp;·&nbsp; braajad1@gmail.com &nbsp;·&nbsp; github.com/BaraaJadaan &nbsp;·&nbsp; Portfolio"
}

frontend_sections = [
    {
        'title': "SUMMARY",
        'items': [
            {'type': 'paragraph', 'text': "Frontend Developer with roughly three years building production user interfaces in React.js and React Native — from enterprise admin portals and CMS/CRM systems to consumer mobile apps. Comfortable owning a frontend end to end: component architecture, state management, RESTful API integration, and responsive, cross-browser delivery, working closely with backend and design teams in Agile settings. Bachelor's degree in Artificial Intelligence & Information Technology."}
        ]
    },
    {
        'title': "EDUCATION",
        'items': [
            {'type': 'subheading', 'text': "Bachelor of Engineering in Artificial Intelligence and Information Technology"},
            {'type': 'paragraph', 'text': "Damascus University"}
        ]
    },
    {
        'title': "TECHNICAL SKILLS",
        'items': [
            {'type': 'paragraph', 'text': "<b>Frontend Frameworks:</b> React.js, Next.js, React Native, Flutter<br/><b>Languages:</b> TypeScript, JavaScript (ES6+), HTML5, CSS3, Dart<br/><b>State Management:</b> Redux, Zustand, React Query<br/><b>UI & Styling:</b> Tailwind CSS, Material UI, GSAP, responsive design<br/><b>Integration & Tooling:</b> RESTful APIs, Git (branching, pull requests), code review & Clean Code practices, Agile/Scrum collaboration<br/><b>Backend Familiarity:</b> FastAPI (Python), C#/.NET, Supabase (PostgreSQL)<br/><b>Human Languages:</b> Arabic (Native), English (B2, TOEFL)"}
        ]
    },
    {
        'title': "PROFESSIONAL EXPERIENCE",
        'items': [
            {'type': 'role', 'role': "Mobile Frontend Developer — Rafeek Darbak", 'dates': "Feb 2026 – Present"},
            {'type': 'bullet', 'text': "Own the Flutter-based ride-sharing app <b>“Rafiq Darbak” (رفيق دربك)</b> end to end — built and shipped across iOS and Android. iOS deployment via Codemagic/App Store Connect and Android release management via Google Play Console including test releases."},
            {'type': 'bullet', 'text': "Built, maintained and resolved production issues of the platform's admin panel, iOS and Android."},
            {'type': 'bullet', 'text': "Shipped major features including voice messaging, real-time messaging, live location sharing, radius-based matching, and the Explore screen, backed by Supabase (PostgreSQL) for data storage, authentication, and Row-Level Security policies."},
            
            {'type': 'role', 'role': "Frontend Developer — TabTabGo", 'dates': "Oct 2024 – Feb 2026"},
            {'type': 'bullet', 'text': "<b>Sole frontend developer</b> on a Customer & Network Management Suite for a Danish ISP — built the admin portal, web onboarding portal, and a companion React Native mobile app, including direct client calls to gather and refine requirements."},
            {'type': 'bullet', 'text': "Integrated RESTful APIs across the platform and managed client-side application state to deliver responsive interfaces for daily use by the ISP's staff and customers."},
            {'type': 'bullet', 'text': "Contributed frontend and dashboard development to a multi-platform Social Monitoring & Dashboard product — a listening and analytics engine tracking talent and campaign performance across social platforms — as part of a broader system re-architecture."},
            {'type': 'bullet', 'text': "Delivered comparable frontend builds for several other agency clients across additional industries."},
            {'type': 'bullet', 'text': "Took on select backend tasks in C#/.NET during later months at the job, extending past the primary frontend scope."},
            
            {'type': 'role', 'role': "Frontend Developer — ATC Systematic (Rafeed)", 'dates': "Dec 2023 – Aug 2024"},
            {'type': 'bullet', 'text': "Built the frontend for Lumytic, ATC Systematic's ERP platform for the lighting industry, including the public marketing website."},
            {'type': 'bullet', 'text': "Developed frontend interfaces for the Lumytic CMS and CRM systems used by lighting manufacturers and distributors to manage products, content, and customer relationships."}
        ]
    },
    {
        'title': "SELECTED PERSONAL PROJECTS",
        'items': [
            {'type': 'subheading', 'text': "Filmora — Movie Discovery Portal &nbsp;<font color='#666666' size='7.5'>(React, Redux, Material UI, TMDB API)</font>"},
            {'type': 'bullet', 'text': "Built a movie search and discovery app with authenticated wishlist functionality, using Redux for state management and the TMDB API for content."},
            
            {'type': 'subheading', 'text': "Gamer Wiki — Games Discovery Portal &nbsp;<font color='#666666' size='7.5'>(React, React Query, Zustand, RAWG API)</font>"},
            {'type': 'bullet', 'text': "Built a games search portal with filtering by popularity and release date, using React Query for server-state caching and Zustand for client state."},
            
            {'type': 'subheading', 'text': "OneForAll — E-Commerce Platform &nbsp;<font color='#666666' size='7.5'>(React, Redux)</font>"},
            {'type': 'bullet', 'text': "Built a product browsing and purchase flow with a points-based billing/rewards system."},
            
            {'type': 'subheading', 'text': "Stocks — Real-Time Stock Tracker &nbsp;<font color='#666666' size='7.5'>(React, Alpha Vantage API)</font>"},
            {'type': 'bullet', 'text': "Built a real-time stock price tracker and financial news feed."},
            
            {'type': 'subheading', 'text': "Arabic Poetry RAG Agent &nbsp;<font color='#666666' size='7.5'>(Vanilla HTML/CSS/JS, Python, FastAPI, LanceDB, Docker, MLflow)</font>"},
            {'type': 'bullet', 'text': "Production semantic search & ReAct agent over 355k+ classical Arabic verse corpus. Hybrid dense vector + BM25 search (LanceDB + Tantivy), Qwen3-Embedding, FastAPI backend with SSE token streaming, and bilingual RTL chat interface."}
        ]
    }
]

# Define AI Resume
ai_header = {
    'name': "BARAA JADAAN",
    'subtitle': "AI Engineer | Full-Stack Developer | RAG Systems & MLOps",
    'contact': "+963 997 748 481 &nbsp;·&nbsp; braajad1@gmail.com &nbsp;·&nbsp; github.com/BaraaJadaan &nbsp;·&nbsp; Portfolio &nbsp;·&nbsp; Live RAG Demo"
}

ai_sections = [
    {
        'title': "SUMMARY",
        'items': [
            {'type': 'paragraph', 'text': "AI Engineer who ships LLM systems end to end — retrieval-augmented generation, agentic tool-calling pipelines, and QLoRA fine-tuning — from data pipeline through Dockerized cloud deployment. Bachelor's degree in Artificial Intelligence & Information Technology paired with roughly three years of full-stack and end-to-end software engineering, giving equal command of building ML/NLP models and the MLOps needed to run them reliably in production."}
        ]
    },
    {
        'title': "EDUCATION",
        'items': [
            {'type': 'subheading', 'text': "Bachelor of Engineering in Artificial Intelligence and Information Technology"},
            {'type': 'paragraph', 'text': "Damascus University"}
        ]
    },
    {
        'title': "TECHNICAL SKILLS",
        'items': [
            {'type': 'paragraph', 'text': "<b>LLM & Generative AI:</b> RAG architecture, agentic tool-calling (ReAct-style orchestration), prompt engineering, LoRA/QLoRA fine-tuning (Unsloth, PEFT, TRL, bitsandbytes), GGUF quantization, Qwen & Claude model families<br/><b>Machine Learning & NLP:</b> scikit-learn, TensorFlow, PyTorch, Transformers, hybrid retrieval (dense + BM25), embedding models (Voyage, Qwen-Embedding), evaluation & experiment design<br/><b>MLOps & Deployment:</b> Docker, GitHub Actions CI/CD, MLflow, FastAPI, LanceDB/ChromaDB, Oracle Cloud (ARM)<br/><b>Programming & Data:</b> Python, Pandas, NumPy, SQL, JavaScript/TypeScript<br/><b>Full-Stack & Mobile:</b> React.js, React Native, Flutter, .NET, REST & SSE APIs, Supabase, Redux/Zustand<br/><b>Languages:</b> Arabic (Native), English (B2, TOEFL)"}
        ]
    },
    {
        'title': "FEATURED AI/ML PROJECTS",
        'items': [
            {'type': 'subheading', 'text': "Arabic Poetry Semantic Search & RAG Agent &nbsp;<font color='#666666' size='7.5'>(Python, FastAPI, LanceDB, Docker, GitHub Actions, MLflow)</font>"},
            {'type': 'bullet', 'text': "<b>Retrieval engine:</b> Engineered a hybrid RAG pipeline over a 355k+ classical Arabic verse corpus — combining LanceDB dense vector search, Tantivy/BM25 full-text search, and Reciprocal Rank Fusion (RRF), indexed with IVF-PQ for sub-200ms latency on memory-constrained hardware."},
            {'type': 'bullet', 'text': "<b>Embedding architecture:</b> Benchmarked a local Voyage GGUF model, diagnosed a 0% semantic recall failure using a 25-query golden evaluation harness, and re-architected with Qwen3-Embedding (1024-dim Matryoshka truncation + Float16) — boosting Recall@1 from 0% to 94.4% (100% Recall@5)."},
            {'type': 'bullet', 'text': "<b>Agentic orchestration:</b> Implemented a zero-framework ReAct agent in Python featuring a custom 3-state SSE stream splitter (routing &lt;think&gt; reasoning tokens to a live UI drawer) and fuzzy/regex fallback parsers to recover from LLM tool-calling syntax anomalies."},
            {'type': 'bullet', 'text': "<b>Production Architecture:</b> Shipped a dual-engine architecture (local GGUF offline mode vs. cloud API mode) with multi-key automatic failover for HTTP 429 quota resilience; decoupled the frontend (GitHub Pages) from a containerized FastAPI backend with strict CORS controls."},
            {'type': 'bullet', 'text': "<b>MLOps:</b> Instrumented MLflow tracking for retrieval metrics (Recall@k, MRR, latency), isolated dependencies into modular uv groups, and established an automated GitHub Actions CI pipeline executing deterministic regression test fixtures on every push."},
            
            {'type': 'subheading', 'text': "Arabic Poetry Meter Classification — LLM Fine-Tuning &nbsp;<font color='#666666' size='7.5'>(QLoRA, Qwen2.5-7B, Unsloth, TRL, PEFT, GGUF)</font>"},
            {'type': 'bullet', 'text': "<b>Fine-tuning:</b> Attached a rank-16 QLoRA adapter to all attention and MLP projection layers of Qwen2.5-7B-Instruct via Unsloth (4-bit), training 40.4M of the model's 7.6B parameters (0.53%) over 3 epochs on 5,000 balanced classical Arabic verses across 5 poetic meters (بحور)."},
            {'type': 'bullet', 'text': "<b>Diagnosis-driven optimization:</b> Resolved base-model majority bias (guessing Tawil 84% of the time) and prevented training model collapse by implementing response-only cross-entropy loss masking to isolate gradient updates to the target meter labels."},
            {'type': 'bullet', 'text': "<b>Results:</b> Benchmarked on a 250-verse held-out test set (50/meter), achieving +32.0 point accuracy jump over the base model with 0% invalid formatting, evaluated via a custom statistical benchmarking harness."},
            {'type': 'bullet', 'text': "<b>Deployment & serving:</b> Eliminated train-serve distribution skew by standardizing inference prompt templates, then merged adapter weights and exported to 4-bit GGUF (q4_k_m) for lightweight local CPU inference via llama-cpp-python."}
        ]
    },
    {
        'title': "PROFESSIONAL EXPERIENCE",
        'items': [
            {'type': 'role', 'role': "End-to-End Software Engineer — Rafeek Darbak", 'dates': "Feb 2026 – Present"},
            {'type': 'bullet', 'text': "Own the Flutter-based ride-sharing app <b>“Rafiq Darbak” (رفيق دربك)</b> end to end — built and shipped across iOS and Android. iOS deployment via Codemagic/App Store Connect and Android release management via Google Play Console including test releases."},
            {'type': 'bullet', 'text': "Built, maintained and resolved production issues of the platform's admin panel, iOS and Android."},
            {'type': 'bullet', 'text': "Shipped major features including voice messaging, real-time messaging, live location sharing, radius-based matching, and the Explore screen, backed by Supabase (PostgreSQL) for data storage, authentication, and Row-Level Security policies."},
            
            {'type': 'role', 'role': "Frontend Developer — TabTabGo", 'dates': "Oct 2024 – Feb 2026"},
            {'type': 'bullet', 'text': "Sole frontend developer on a Customer & Network Management Suite for a Danish ISP — built the admin portal, web onboarding portal, and a companion React Native mobile app, including direct client calls to gather and refine requirements."},
            {'type': 'bullet', 'text': "Contributed frontend and dashboard development to a multi-platform Social Monitoring & Dashboard product — a listening and analytics engine tracking talent and campaign performance across social platforms."},
            {'type': 'bullet', 'text': "Took on select backend tasks in C#/.NET during later months at the job, extending past the primary frontend scope."},
            
            {'type': 'role', 'role': "Frontend Developer — ATC Systematic (Rafeed)", 'dates': "Dec 2023 – Aug 2024"},
            {'type': 'bullet', 'text': "Built the frontend for Lumytic, ATC Systematic's ERP platform for the lighting industry, including the public marketing website, CMS, and CRM systems."}
        ]
    },
    {
        'title': "ADDITIONAL PROJECTS",
        'items': [
            {'type': 'bullet', 'text': "<b>Arabic Named Entity Recognition:</b> Sequence labeling for Arabic text using statistical, machine-learning, and deep-learning approaches."},
            {'type': 'bullet', 'text': "<b>Grammar Correction with Transformers:</b> Fine-tuned a pre-trained transformer model to correct grammar in user-submitted text."},
            {'type': 'bullet', 'text': "<b>Medical Q&A Data Analysis:</b> Cleaned, analyzed, and classified thousands of real-world questions from an online medical-advice platform."},
            {'type': 'bullet', 'text': "<b>Exam Proctoring System (Graduation Project):</b> Head-pose estimation, face recognition, eye tracking, and object detection to flag cheating in online exams."},
            {'type': 'bullet', 'text': "<b>Sound Classification for Hearing-Impaired Parents:</b> Audio classification for an assistive alerting system."},
            {'type': 'bullet', 'text': "<b>Front-End Applications:</b> E-commerce platform, gaming discovery portal, real-time stock tracker, and movie search app."}
        ]
    }
]

os.makedirs('src/Assets', exist_ok=True)
os.makedirs('public', exist_ok=True)

# Generate PDFs
fe_pdf_src = 'src/Assets/Baraa_Jadaan_Frontend_Resume.pdf'
fe_pdf_pub = 'public/Baraa_Jadaan_Frontend_Resume.pdf'
ai_pdf_src = 'src/Assets/Baraa_Jadaan_AI_Engineer_Resume.pdf'
ai_pdf_pub = 'public/Baraa_Jadaan_AI_Engineer_Resume.pdf'

create_resume_pdf(fe_pdf_src, frontend_header, frontend_sections)
create_resume_pdf(ai_pdf_src, ai_header, ai_sections)

# Copy to public folder
import shutil
shutil.copyfile(fe_pdf_src, fe_pdf_pub)
shutil.copyfile(ai_pdf_src, ai_pdf_pub)

# Convert pages to PNG for visual display in react component
def export_pages_to_images(pdf_path, prefix):
    doc = fitz.open(pdf_path)
    img_paths = []
    for i, page in enumerate(doc):
        pix = page.get_pixmap(dpi=150)
        out_src = f"src/Assets/{prefix}_page_{i+1}.png"
        pix.save(out_src)
        img_paths.append(out_src)
        print(f"Saved {out_src}")
    return img_paths

export_pages_to_images(fe_pdf_src, "frontend_resume")
export_pages_to_images(ai_pdf_src, "ai_resume")

print("All resumes and preview images successfully generated!")
