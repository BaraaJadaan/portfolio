import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend & Mobile Developer",
          "AI & Machine Learning Engineer",
          "Flutter & React Developer",
          "RAG & LLM Systems Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
