import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <Container fluid className="footer">
        <Row className="align-items-center">
          <Col md="6" className="footer-copywright">
            <p className="mb-0 text-white">Copyright © {year} Baraa Jadaan</p>
          </Col>
          <Col md="6" className="footer-body">
            <ul className="footer-icons mb-0">
              <li className="social-icons">
                <a
                  href="https://www.github.com/BaraaJadaan"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Baraa's GitHub profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/baraa.jadaan/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Baraa's Instagram profile"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
