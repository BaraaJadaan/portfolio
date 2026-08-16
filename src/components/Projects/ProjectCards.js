import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <div style={{ overflow: "hidden", borderTopLeftRadius: "calc(0.375rem - 1px)", borderTopRightRadius: "calc(0.375rem - 1px)" }}>
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title || "card-img"}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              objectPosition: "top",
              padding: "10px",
              borderRadius: "16px",
            }}
          />
        </div>
      )}
      <Card.Body className="d-flex flex-column" style={{ padding: "20px" }}>
        <Card.Title style={{ fontWeight: "600", fontSize: "1.25em", marginBottom: "12px" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1, color: "#dcdcdc", fontSize: "0.95em", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
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
