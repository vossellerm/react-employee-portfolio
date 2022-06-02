import React from "react";
import resume from "../../assets/Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h2>
        Download{" "}
        <a href={resume} target="_blank" rel="noreferrer noopener">
          My Resume
        </a>
      </h2>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
