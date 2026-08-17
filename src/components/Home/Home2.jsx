import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

const Tilt = lazy(() => import("react-parallax-tilt"));

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
              I am a Software Engineer & AI Specialist passionate about transforming complex ideas into high-performance, production-ready software.
              <br />
              <br />
              My core focus spans across developing fluid <b className="purple">Web & Mobile Applications</b> with <b className="purple">React.js, TypeScript, Next.js, and Flutter</b>, alongside architecting intelligent <b className="purple">Generative AI & RAG Systems</b>.
              <br />
              <br />
              From publishing cross-platform apps on the App Store and Google Play to building low-latency semantic search engines over large datasets, I prioritize clean architecture, high throughput, and seamless user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <Suspense fallback={
              <img
                src={myImg}
                className="img-fluid"
                alt="Avatar illustration of Baraa Jadaan"
                width="250"
                height="250"
                loading="lazy"
                decoding="async"
              />
            }>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Avatar illustration of Baraa Jadaan"
                  width="250"
                  height="250"
                  loading="lazy"
                  decoding="async"
                />
              </Tilt>
            </Suspense>
          </Col>
        </Row>
        <Row style={{ marginTop: '50px' }}>
          <Col md={12} className="home-about-social">
            <h2>FIND ME ON</h2>
            <p className="social-subheading">Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.github.com/BaraaJadaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Baraa's GitHub profile"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/baraa.jadaan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Baraa's Instagram profile"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
