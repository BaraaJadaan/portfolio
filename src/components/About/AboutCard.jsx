import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I specialize in full-lifecycle software development, combining modern frontend craftsmanship with applied AI engineering:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li className="about-activity" style={{ marginBottom: "12px", textAlign: "justify" }}>
              <strong className="purple">Web & Mobile:</strong> Building responsive web platforms (<span className="purple">React, Next.js, TypeScript</span>) & production mobile apps (<span className="purple">Flutter, Supabase</span>) shipped to App Store & Google Play.
            </li>
            <li className="about-activity" style={{ marginBottom: "12px", textAlign: "justify" }}>
              <strong className="purple">Applied AI & RAG:</strong> Designing low-latency semantic search engines, ReAct agentic workflows, and LLM pipelines (<span className="purple">FastAPI, LanceDB, PyTorch</span>).
            </li>
            <li className="about-activity" style={{ marginBottom: "12px", textAlign: "justify" }}>
              <strong className="purple">Architecture & Quality:</strong> Prioritizing clean architecture, scalable state management, high performance, and intuitive user experiences.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

