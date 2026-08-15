import React from "react";
import Card from "react-bootstrap/Card";



function AboutCard() {
  return (
    <>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a <span className="purple">Frontend Developer and AI Engineer </span>
            from <span className="purple">Damascus, Syria.</span>
            <br />
            I build modern, high-performance web applications and develop intelligent AI models.
            <br />
            I am always eager to learn cutting-edge technologies, contribute to innovative projects, and craft meaningful digital experiences.
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
