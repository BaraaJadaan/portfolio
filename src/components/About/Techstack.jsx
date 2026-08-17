import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiBootstrap,
} from "react-icons/di";
import {
  SiTypescript,
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiFastapi,
  SiSupabase,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiNodedotjs,
  SiTailwindcss,
  SiCsharp,
} from "react-icons/si";
import {
  FaVuejs
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript" aria-label="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript" aria-label="TypeScript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js" aria-label="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flutter" aria-label="Flutter">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Dart" aria-label="Dart">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js" aria-label="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vue.js" aria-label="Vue.js">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python" aria-label="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FastAPI" aria-label="FastAPI">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch" aria-label="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow" aria-label="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="OpenCV" aria-label="OpenCV">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scikit-Learn" aria-label="Scikit-Learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Supabase" aria-label="Supabase">
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL" aria-label="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js" aria-label="Node.js">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tailwind CSS" aria-label="Tailwind CSS">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap" aria-label="Bootstrap">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#" aria-label="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++" aria-label="C++">
        <CgCPlusPlus />
      </Col>
    </Row>
  );
}

export default Techstack;
