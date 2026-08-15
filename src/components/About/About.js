import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import about from "../../Assets/about.png";
import Footer from "../Footer";

function About() {
  return (
    <div>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ paddingBottom: "100px" }}>
          <Col
            md={6}
            style={{ paddingTop: "20px" }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Me?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={6}
          >
            <img style={{width:'100%'}} src={about} alt="guy working"></img>
            
          </Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
      <Footer/>
      </div>
  );
}

export default About;
