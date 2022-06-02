import React from "react";
import resume from "../../assets/Resume.pdf";

const styles = {
  link: {
    color: "#C9A8F1",
  },
  list: {
    fontSize: 25,
  },
};

export default function Resume() {
  return (
    <div className=" ms-5">
      <h1 className="my-4 ">Resume</h1>
      <h2 className="my-4 ">
        Download{" "}
        <a
          href={resume}
          target="_blank"
          rel="noreferrer noopener"
          style={styles.link}
        >
          My Resume
        </a>
      </h2>
      <h3>Front-end Proficiencies</h3>
      <ul style={styles.list}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul style={styles.list}>
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
