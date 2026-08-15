import React from "react";
import Card from "react-bootstrap/Card";



function AboutCard() {
  return (
    <>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a <span className="purple">Frontend & Mobile Developer and AI Engineer </span>
            from <span className="purple">Damascus, Syria</span> holding a Bachelor of Engineering in <span className="purple">Artificial Intelligence & IT</span> from Damascus University.
            <br />
            <br />
            I have hands-on experience building end-to-end production mobile apps (<span className="purple">Flutter, Supabase</span>), client-facing web portals (<span className="purple">React, TypeScript, Next.js</span>), and cutting-edge GenAI/RAG architectures (<span className="purple">FastAPI, LanceDB, Qwen, PyTorch</span>).
            <br />
            <br />
            I love tackling challenging engineering problems—from building multi-tool agentic loops to designing clean, accessible, and responsive user interfaces.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
      <div>
        
      </div>
    </>
  );
}

export default AboutCard;
