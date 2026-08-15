import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Particle from "../Particle";
import Footer from "../Footer";
import { AiOutlineDownload } from "react-icons/ai";
import { FaReact, FaBrain, FaExternalLinkAlt } from "react-icons/fa";

// PDF Assets
import frontendPdf from "../../Assets/Baraa_Jadaan_Frontend_Resume.pdf";
import aiPdf from "../../Assets/Baraa_Jadaan_AI_Engineer_Resume.pdf";

// Image Previews
import fePage1 from "../../Assets/frontend_resume_page_1.png";
import fePage2 from "../../Assets/frontend_resume_page_2.png";
import aiPage1 from "../../Assets/ai_resume_page_1.png";
import aiPage2 from "../../Assets/ai_resume_page_2.png";

function ResumeNew() {
  const [selectedResume, setSelectedResume] = useState("frontend");

  const resumes = {
    frontend: {
      title: "Frontend Developer Resume",
      tagline: "React.js, TypeScript, Next.js, Flutter & Component-Driven UI",
      pdf: frontendPdf,
      filename: "Baraa_Jadaan_Frontend_Resume.pdf",
      pages: [fePage1, fePage2],
      icon: <FaReact style={{ marginRight: "8px", fontSize: "1.2em" }} />,
    },
    ai: {
      title: "AI & Full-Stack Engineer Resume",
      tagline: "RAG Systems, LLM Fine-Tuning, MLOps, FastAPI & Python",
      pdf: aiPdf,
      filename: "Baraa_Jadaan_AI_Engineer_Resume.pdf",
      pages: [aiPage1, aiPage2],
      icon: <FaBrain style={{ marginRight: "8px", fontSize: "1.2em" }} />,
    },
  };

  const active = resumes[selectedResume];

  return (
    <div>
      <Container fluid className="resume-section" style={{ minHeight: "100vh", position: "relative" }}>
        <Particle />

        <Container>
          {/* Header */}
          <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "25px" }}>
            <Col md={10}>
              <h1 className="project-heading" style={{ fontSize: "2.3em", marginBottom: "10px" }}>
                Curriculum <strong className="purple">Vitae</strong>
              </h1>
              <p style={{ color: "#dcdcdc", fontSize: "1.05em" }}>
                Select and download the resume tailored to your domain of interest.
              </p>
            </Col>
          </Row>

          {/* Resume Switcher Tabs */}
          <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
            <Col xs={12} md={8} lg={6} style={{ textAlign: "center" }}>
              <ButtonGroup style={{ width: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
                <Button
                  variant={selectedResume === "frontend" ? "primary" : "dark"}
                  onClick={() => setSelectedResume("frontend")}
                  style={{
                    padding: "12px 16px",
                    fontWeight: "600",
                    border: "1px solid #623686",
                    backgroundColor: selectedResume === "frontend" ? "#623686" : "rgba(20, 20, 35, 0.8)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FaReact style={{ marginRight: "8px" }} /> Frontend Developer
                </Button>
                <Button
                  variant={selectedResume === "ai" ? "primary" : "dark"}
                  onClick={() => setSelectedResume("ai")}
                  style={{
                    padding: "12px 16px",
                    fontWeight: "600",
                    border: "1px solid #623686",
                    backgroundColor: selectedResume === "ai" ? "#623686" : "rgba(20, 20, 35, 0.8)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FaBrain style={{ marginRight: "8px" }} /> AI & Full-Stack
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

          {/* Active Info & Action Buttons */}
          <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "35px" }}>
            <Col md={8}>
              <div
                style={{
                  background: "rgba(30, 20, 50, 0.6)",
                  backdropFilter: "blur(10px)",
                  padding: "20px",
                  borderRadius: "15px",
                  border: "1px solid rgba(138, 73, 168, 0.3)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
                  marginBottom: "20px",
                }}
              >
                <h4 style={{ color: "white", marginBottom: "6px" }}>
                  {active.icon} {active.title}
                </h4>
                <p style={{ color: "#a588c9", marginBottom: "15px", fontSize: "0.95em" }}>
                  {active.tagline}
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                  <Button
                    variant="primary"
                    href={active.pdf}
                    download={active.filename}
                    target="_blank"
                    style={{
                      padding: "10px 24px",
                      fontSize: "1em",
                      fontWeight: "600",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(119, 53, 136, 0.4)",
                    }}
                  >
                    <AiOutlineDownload style={{ marginRight: "6px" }} /> Download {selectedResume === "frontend" ? "Frontend" : "AI"} CV
                  </Button>

                  <Button
                    variant="outline-light"
                    href={active.pdf}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "10px 20px",
                      fontSize: "1em",
                      borderRadius: "8px",
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <FaExternalLinkAlt style={{ marginRight: "6px" }} /> Open PDF
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Document Preview Pages */}
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            {active.pages.map((pageImg, idx) => (
              <Col xs={12} md={10} lg={8} key={idx} style={{ marginBottom: "35px", textAlign: "center" }}>
                <div style={{ color: "#aaa", fontSize: "0.85em", marginBottom: "8px", textAlign: "right" }}>
                  Page {idx + 1} of {active.pages.length}
                </div>
                <div
                  style={{
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(138, 73, 168, 0.3)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <img
                    src={pageImg}
                    alt={`${active.title} - Page ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </Col>
            ))}
          </Row>

          {/* Bottom Download Bar */}
          <Row style={{ justifyContent: "center", paddingBottom: "50px", textAlign: "center" }}>
            <Col md={6}>
              <Button
                variant="primary"
                href={active.pdf}
                download={active.filename}
                target="_blank"
                style={{
                  padding: "12px 30px",
                  fontSize: "1.1em",
                  fontWeight: "600",
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(119, 53, 136, 0.5)",
                }}
              >
                <AiOutlineDownload style={{ marginRight: "8px", fontSize: "1.2em" }} /> Download {active.title} (PDF)
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default ResumeNew;
