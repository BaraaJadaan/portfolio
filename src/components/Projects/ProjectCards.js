import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : (
        <div style={{ height: "35px" }}></div>
      )}
      <Card.Body className="d-flex flex-column" style={props.imgPath ? {} : { paddingTop: "15px" }}>
        <Card.Title style={props.imgPath ? { translate: '0 -50px' } : {}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1, ...(props.imgPath ? { translate: '0 -50px' } : {}) }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", paddingBottom: "10px", ...(props.imgPath ? { translate: '0 -50px' } : {}) }}>
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
