import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiDocker,
  SiJupyter,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VS Code" aria-label="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub" aria-label="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git" aria-label="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman" aria-label="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker" aria-label="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Linux" aria-label="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebook" aria-label="Jupyter Notebook">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel" aria-label="Vercel">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
