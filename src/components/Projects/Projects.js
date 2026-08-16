import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Footer from "../Footer";

// Real-World Project Images
import RafikDarbak from "../../Assets/Projects/RafikDarbak.png";
import PoetryRAG from "../../Assets/Projects/PoetryRAG.png";
import PoetryMeter from "../../Assets/Projects/PoetryMeter.png";
import Lumytic from "../../Assets/Projects/Lumytic.png";
import Archibest from "../../Assets/Projects/Archibest.png";
import ISPCustomerSuite from "../../Assets/Projects/ISPCustomerSuite.png";
import ISPMobileApp from "../../Assets/Projects/ISPMobileApp.png";

// Personal Project Images
import OneForAll from "../../Assets/Projects/OneForAll.png";
import GamerWiki from "../../Assets/Projects/GamerWiki.png";
import Stocking from "../../Assets/Projects/Stocking.png";
import Filmora from "../../Assets/Projects/Filmora.png";
import BrandingMind from "../../Assets/Projects/BrandingMind.png";
import LightingBuilding from "../../Assets/Projects/Lighting&Building.png";
import UpHills from "../../Assets/Projects/UpHills.png";

function Projects() {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          {/* Real-World & Production Projects */}
          <h1 className="project-heading">
            Real-World & <strong className="purple">Production Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Production systems, client platforms, and deployed AI applications.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={RafikDarbak}
                title="Rafik Darbak (رفيق دربك)"
                description="First ride-sharing application designed for users in Syria. Shipped across iOS and Android with Flutter & Supabase, featuring voice messaging, real-time chats, live location sharing, radius-based matching, and admin panel."
                demoLink="https://play.google.com/store/apps/details?id=com.saveride.app"
                demoText="Google Play"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PoetryRAG}
                title="Arabic Poetry RAG Agent"
                description="Production semantic search & ReAct agent over 355k+ classical Arabic verse corpus. Hybrid dense vector + BM25 search (LanceDB + Tantivy), Qwen3-Embedding, FastAPI backend with SSE token streaming, and bilingual RTL chat interface."
                ghLink="https://github.com/BaraaJadaan/poetry-rag"
                demoLink="https://baraajadaan.github.io/poetry-rag/"
                demoText="Live Demo"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PoetryMeter}
                title="Arabic Meter Classification"
                description="Fine-tuned Qwen2.5-7B-Instruct using QLoRA via Unsloth to classify classical Arabic poetry meters (بحور الشعر العربي). Achieved +32.0 point accuracy jump, resolved base-model bias, merged adapters, and exported quantized 4-bit GGUF for local inference."
                ghLink="https://github.com/BaraaJadaan/poetry-fine-tuning"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Lumytic}
                title="Lumytic ERP / CMS / CRM"
                description="Enterprise frontend platforms for ATC Systematic (Rafeed). Built the public marketing website, CMS, and CRM systems for lighting manufacturers with modern React, responsive design, and reusable component architecture."
                demoLink="https://lumytic.com/"
                demoText="Website"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Archibest}
                title="Archibest Competitions"
                description="Leading global architecture competitions platform built with Next.js connecting designers worldwide. Features competition management workflows, early-bird registration, jury evaluation tools, and multi-stage submission processing."
                demoLink="https://archibestcompetitions.com"
                demoText="Live Website"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ISPCustomerSuite}
                title="ISP Customer & Network Suite"
                description="Customer & Network Management Suite for a Danish ISP at TabTabGo. Built client onboarding portal, admin dashboard in React.js, and network provisioning workflows integrating complex RESTful APIs."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ISPMobileApp}
                title="ISP Customer Mobile Application"
                description="Cross-platform React Native app for fiber internet customers managing subscriptions, WiFi router management via TR-069, real-time diagnostics, and offline-first state persistence using Redux."
              />
            </Col>
          </Row>

          {/* Personal Projects */}
          <h1 className="project-heading" style={{ paddingTop: "50px" }}>
            Personal <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Explore some of my creative web applications and tools.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={OneForAll}
                title="OneForAll"
                description="E-commerce website where people get to buy and sell products through a points-based billing system."
                ghLink="https://github.com/BaraaJadaan/OneForAll"
                demoLink="https://youtu.be/PU6Gmy2KrZI"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={GamerWiki}
                title="GamerWiki"
                description="A reliable games search portal to find out games’ information and filter by popularity, release date, etc. Built with React, TypeScript, RAWG API, React Query, and Zustand."
                ghLink="https://github.com/BaraaJadaan/gamer-wiki"
                demoLink="https://gamer-wiki-sepia.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Stocking}
                title="Stocking"
                description="Search for a stock and display its historical price changes and the latest finance news."
                ghLink="https://github.com/BaraaJadaan/Stocking"
                demoLink="https://baraajadaan.github.io/Stocking/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Filmora}
                title="Filmora"
                description="A movie search portal that allows users to discover movies, browse details, and save favorites to an authenticated wishlist. Built with React, Redux, TMDB API, and Material UI."
                ghLink="https://github.com/BaraaJadaan/filmora"
                demoLink="https://filmora-beta.vercel.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BrandingMind}
                title="Branding Mind"
                description="Modern website for a branding and creative agency to showcase their portfolio and design services."
                ghLink="https://github.com/BaraaJadaan/brandingmind"
                demoLink="https://baraajadaan.github.io/brandingmind/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={LightingBuilding}
                title="LightingBuilding"
                description="Modern landing page for an architectural lighting company built using GSAP animations and Tailwind CSS."
                ghLink="https://github.com/BaraaJadaan/lighting-building"
                demoLink="https://lighting-building.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={UpHills}
                title="UpHills"
                description="Modern landing page for a bicycle and outdoor gear leasing company built with responsive CSS."
                ghLink="https://github.com/BaraaJadaan/UpHills"
                demoLink="https://baraajadaan.github.io/UpHills/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
