import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";

document.body.style = "background: #381155";

const styles = {
  icon: {
    width: 40,
    margin: 20,
  },
  footer: {
    textAlign: "center",
    marginTop: 100,
  },
  page: {
    color: "white",
    fontFamily: "Serif",
  },
  header: {
    backgroundColor: "#592575",
  },
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      {renderPage()}
      <footer>
        <div style={styles.footer}>
          <img
            src={github}
            alt=""
            href="https://github.com/vossellerm"
            target="_blank"
            rel="noreferrer noopener"
            style={styles.icon}
          />
          <img
            src={linkedin}
            alt=""
            href="https://www.linkedin.com/in/mikayla-vosseller-134b891a9/"
            target="_blank"
            rel="noreferrer noopener"
            style={styles.icon}
          />
          <img
            src={twitter}
            alt=""
            href="https://twitter.com/equivont"
            target="_blank"
            rel="noreferrer noopener"
            style={styles.icon}
          />
        </div>
      </footer>
    </div>
  );
}
