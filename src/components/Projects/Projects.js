import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OneForAll from "../../Assets/Projects/OneForAll.png";
import UpHills from "../../Assets/Projects/UpHills.png";
import Stocking from "../../Assets/Projects/Stocking.png";
import BrandingMind from "../../Assets/Projects/BrandingMind.png";
import LightingBuilding from "../../Assets/Projects/Lighting&Building.png";
import GamerWiki from "../../Assets/Projects/GamerWiki.png";
import Filmora from "../../Assets/Projects/Filmora.png";
import Footer from "../Footer";


function Projects() {
  return (
    <div>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Real-World & <strong className="purple">Production Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production systems, client platforms, and deployed AI applications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Rafiq Darbak (رفيق دربك)"
              description="End-to-end Flutter mobility and ride-sharing app shipped across iOS and Android. Built with Supabase (PostgreSQL, RLS), real-time messaging, live location sharing, radius-based matching, CI/CD automation, and Shorebird OTA updates."
              demoLink="https://baraajadaan.github.io/portfolio/"
              demoText="Overview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Arabic Poetry RAG Agent"
              description="Production semantic search & ReAct agent over 3.4M verses. Hybrid dense vector + BM25 search (LanceDB + Tantivy), Qwen3-Embedding, FastAPI backend with SSE token streaming, and bilingual RTL chat interface."
              ghLink="https://github.com/BaraaJadaan"
              demoLink="https://baraajadaan.github.io/poetry-rag/"
              demoText="Live Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="ISP Customer & Network Suite"
              description="Customer & Network Management Suite for a Danish ISP at TabTabGo. Built client onboarding portal and admin dashboard in React.js, along with a React Native companion mobile app, integrating complex RESTful APIs."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Lumytic ERP / CMS / CRM"
              description="Modular enterprise frontend platforms for ATC Systematic (Rafeed). Developed the public marketing website, CMS, and CRM systems for lighting manufacturers with shared reusable component architecture."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Arabic Meter Classification"
              description="Fine-tuned Qwen2.5-7B-Instruct using QLoRA via Unsloth to classify classical Arabic poetry meters (بحر). Merged adapters and exported quantized GGUF weights for lightweight local inference."
              ghLink="https://github.com/BaraaJadaan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Build to Learn"
              description="Developer learning tool released publicly on GitHub that generates comprehensive portfolio projects alongside companion deep-dive guides, interview Q&As, and architecture walkthroughs."
              ghLink="https://github.com/BaraaJadaan"
            />
          </Col>
        </Row>

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
              description="A reliable games search portal to find out games’ information and filter by popularity, release date, etc. Used Zustand, React Query and Typescript, Chakra UI, and RAWG API "
              ghLink="https://github.com/BaraaJadaan/gamer-wiki"
              demoLink="https://gamer-wiki-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stocking}
              title="Stocking"
              description="Search for a stock and display its historical price changes and the latest finance news"
              ghLink="https://github.com/BaraaJadaan/Stocking"
              demoLink="https://baraajadaan.github.io/Stocking/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Filmora}
              title="Filmora"
              description="A movie search portal that allow the user to search for movies and see all their information then add them to wishlist if he's logged in. Used React, Redux, TMDB movie API and Material UI"
              ghLink="https://github.com/BaraaJadaan/filmora"
              demoLink="https://filmora-beta.vercel.app"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BrandingMind}
              title="Branding Mind"
              description="Modern website for a branding agency that showcase their portfolio"
              ghLink="https://github.com/BaraaJadaan/brandingmind"
              demoLink="https://baraajadaan.github.io/brandingmind/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LightingBuilding}
              title="LightingBuilding"
              description="Modern landing page for a lighting selling company done using GSAP for animation and Tailwind for styling"
              ghLink="https://github.com/BaraaJadaan/lighting-building"
              demoLink="https://lighting-building.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UpHills}
              title="UpHills"
              description="Modern landing page for a bikes leasing company done using pure CSS"
              ghLink="https://github.com/BaraaJadaan/UpHills"
              demoLink="https://baraajadaan.github.io/UpHills/"
            />
          </Col>
          
        </Row>

      </Container>
    </Container>
      <Footer/>
    </div>
  );
}

export default Projects;
