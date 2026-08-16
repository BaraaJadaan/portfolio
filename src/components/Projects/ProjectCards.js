import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "220px",
            overflow: "hidden",
            padding: "10px",
          }}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title || "card-img"}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
      <Card.Body className="d-flex flex-column" style={{ padding: "20px" }}>
        <Card.Title style={{ fontWeight: "600", fontSize: "1.25em", marginBottom: "12px", textAlign: "center" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1, color: "#dcdcdc", fontSize: "0.95em", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", paddingTop: "15px", textAlign: "center" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
            >
              <CgWebsite /> &nbsp;
              {props.demoText || "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
