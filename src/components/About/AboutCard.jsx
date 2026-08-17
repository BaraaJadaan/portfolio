import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "white" }}>
            I specialize in full-lifecycle software development, combining modern frontend craftsmanship with applied AI engineering:
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: "0", margin: "0" }}>
            <li className="about-activity" style={{ marginBottom: "14px", textAlign: "justify", color: "white" }}>
              <span style={{ color: "#ffffff", marginRight: "10px", fontSize: "1.2em", lineHeight: "1" }}>•</span>
              <strong className="purple">Web & Mobile:</strong> Building responsive web platforms (<span className="purple">React, Next.js, TypeScript</span>) & production mobile apps (<span className="purple">Flutter, Supabase</span>) shipped to App Store & Google Play.
            </li>
            <li className="about-activity" style={{ marginBottom: "14px", textAlign: "justify", color: "white" }}>
              <span style={{ color: "#ffffff", marginRight: "10px", fontSize: "1.2em", lineHeight: "1" }}>•</span>
              <strong className="purple">Applied AI & RAG:</strong> Designing low-latency semantic search engines, ReAct agentic workflows, and LLM pipelines (<span className="purple">FastAPI, LanceDB, PyTorch</span>).
            </li>
            <li className="about-activity" style={{ marginBottom: "14px", textAlign: "justify", color: "white" }}>
              <span style={{ color: "#ffffff", marginRight: "10px", fontSize: "1.2em", lineHeight: "1" }}>•</span>
              <strong className="purple">Architecture & Quality:</strong> Prioritizing clean architecture, scalable state management, high performance, and intuitive user experiences.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

