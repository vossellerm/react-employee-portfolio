import React from "react";
import portfolio from "../assets/images/developer-portfolio.png";
import doggo from "../assets/images/doggo-meet-up.png";
import market from "../assets/images/off-to-the-market.png";
import password from "../assets/images/password-generator.png";
import weather from "../assets/images/weather-dashboard.png";
import work from "../assets/images/work-day-scheduler.png";

const styles = {
  card: {
    width: "25rem",
  },
  image: {
    objectFit: "contain",
  },
};

const projects = [
  {
    name: "Developer Portfolio",
    image: portfolio,
    repo: "https://github.com/vossellerm/Mikayla-developer-portfolio",
    deploy: "https://vossellerm.github.io/Mikayla-developer-portfolio/",
  },
  {
    name: "Doggo Meet Up",
    image: doggo,
    repo: "https://github.com/vossellerm/doggo-meet-up",
    deploy: "https://hidden-reaches-52880.herokuapp.com/",
  },
  {
    name: "Off To The Market",
    image: market,
    repo: "https://github.com/vossellerm/farm-market-finder",
    deploy: "https://vossellerm.github.io/farm-market-finder/",
  },
  {
    name: "Password Generator",
    image: password,
    repo: "https://github.com/vossellerm/password-generator",
    deploy: "https://vossellerm.github.io/password-generator/",
  },

  {
    name: "Weather Dashboard",
    image: weather,
    repo: "https://github.com/vossellerm/weather-dashboard",
    deploy: "https://vossellerm.github.io/weather-dashboard/",
  },
  {
    name: "Work Day Scheduler",
    image: work,
    repo: "https://github.com/vossellerm/work-day-scheduler",
    deploy: "https://vossellerm.github.io/work-day-scheduler/",
  },
];

export default function ProjectContainer() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 w-75 p-3 mx-auto">
      {projects.map(({ name, image, repo, deploy }) => (
        <div className="col ">
          <div className="card ">
            <h5 className="card-title mx-auto my-2">{name}</h5>
            <img
              src={image}
              className="card-img-top"
              alt=""
              style={styles.image}
            />
            <div className="d-inline-flex p-2">
              <a
                href={deploy}
                className="btn btn-primary mx-auto"
                target="_blank"
                rel="noreferrer noopener"
              >
                Deployed Application
              </a>
              <a
                href={repo}
                className="btn btn-primary mx-auto"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
