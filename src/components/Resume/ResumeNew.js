import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Particle from "../Particle";
import Footer from "../Footer";
import { AiOutlineDownload } from "react-icons/ai";
import { FaReact, FaBrain } from "react-icons/fa";

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
      tagline: "React.js, TypeScript, Next.js, Flutter & UI Architecture",
      pdf: frontendPdf,
      filename: "Baraa_Jadaan_Frontend_Resume.pdf",
      pages: [fePage1, fePage2],
      icon: <FaReact style={{ marginRight: "8px", fontSize: "1.2em" }} />,
      btnLabel: "Download Frontend CV",
    },
    ai: {
      title: "AI Engineer Resume",
      tagline: "RAG Systems, LLM Fine-Tuning, MLOps & Python",
      pdf: aiPdf,
      filename: "Baraa_Jadaan_AI_Engineer_Resume.pdf",
      pages: [aiPage1, aiPage2],
      icon: <FaBrain style={{ marginRight: "8px", fontSize: "1.2em" }} />,
      btnLabel: "Download AI CV",
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
              <h1 className="project-heading" style={{ fontSize: "2.4em", marginBottom: "0px" }}>
                My <strong className="purple">Resume</strong>
              </h1>
            </Col>
          </Row>

          {/* Resume Switcher Tabs */}
          <Row style={{ justifyContent: "center", marginBottom: "25px" }}>
            <Col xs={12} sm={10} md={6} lg={5} style={{ textAlign: "center" }}>
              <ButtonGroup style={{ width: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.3)", borderRadius: "10px", overflow: "hidden" }}>
                <Button
                  variant={selectedResume === "frontend" ? "primary" : "dark"}
                  onClick={() => setSelectedResume("frontend")}
                  style={{
                    padding: "10px 14px",
                    fontWeight: "600",
                    border: "1px solid #623686",
                    backgroundColor: selectedResume === "frontend" ? "#623686" : "rgba(20, 20, 35, 0.8)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FaReact style={{ marginRight: "6px" }} /> Frontend Developer
                </Button>
                <Button
                  variant={selectedResume === "ai" ? "primary" : "dark"}
                  onClick={() => setSelectedResume("ai")}
                  style={{
                    padding: "10px 14px",
                    fontWeight: "600",
                    border: "1px solid #623686",
                    backgroundColor: selectedResume === "ai" ? "#623686" : "rgba(20, 20, 35, 0.8)",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FaBrain style={{ marginRight: "6px" }} /> AI Engineer
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

          {/* Active Info & Download Button (Compact Box) */}
          <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "35px" }}>
            <Col xs={12} sm={10} md={6} lg={5}>
              <div
                style={{
                  background: "rgba(30, 20, 50, 0.6)",
                  backdropFilter: "blur(10px)",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(138, 73, 168, 0.3)",
                  boxShadow: "0 8px 25px 0 rgba(31, 38, 135, 0.2)",
                  maxWidth: "460px",
                  margin: "0 auto",
                }}
              >
                <h5 style={{ color: "white", marginBottom: "4px" }}>
                  {active.icon} {active.title}
                </h5>
                <p style={{ color: "#a588c9", marginBottom: "14px", fontSize: "0.9em" }}>
                  {active.tagline}
                </p>

                <div>
                  <Button
                    variant="primary"
                    href={active.pdf}
                    download={active.filename}
                    target="_blank"
                    style={{
                      padding: "9px 24px",
                      fontSize: "0.95em",
                      fontWeight: "600",
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(119, 53, 136, 0.4)",
                    }}
                  >
                    <AiOutlineDownload style={{ marginRight: "6px", fontSize: "1.15em" }} /> {active.btnLabel}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Document Preview Pages */}
          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            {active.pages.map((pageImg, idx) => (
              <Col xs={12} md={10} lg={8} key={idx} style={{ marginBottom: "30px", textAlign: "center" }}>
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
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default ResumeNew;
