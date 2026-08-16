import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Baraa Jadaan</span> from{" "}
            <span className="purple">Damascus, Syria</span>.
            <br />
            I hold a Bachelor of Engineering in{" "}
            <span className="purple">Artificial Intelligence & IT</span> from{" "}
            <span className="purple">Damascus University</span>.
            <br />
            <br />
            I specialize in full-lifecycle software development, combining modern frontend craftsmanship with applied AI engineering:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Web & Mobile:</strong> Building responsive web platforms (<span className="purple">React, Next.js, TypeScript</span>) & production mobile apps (<span className="purple">Flutter, Supabase</span>) shipped to App Store & Google Play.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Applied AI & RAG:</strong> Designing low-latency semantic search engines, ReAct agentic workflows, and LLM pipelines (<span className="purple">FastAPI, LanceDB, Qwen, PyTorch</span>).
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Architecture & Quality:</strong> Prioritizing clean architecture, scalable state management, high performance, and intuitive user experiences.
            </li>
          </ul>

          <p style={{ marginTop: "20px", color: "rgb(155 126 172)" }}>
            "Strive to build things that solve real-world problems and leave a lasting impact!"
          </p>
          <footer className="blockquote-footer" style={{ color: "#a588c9" }}>
            Baraa Jadaan
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

