import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";

const styles = {
  icon: {
    width: 40,
    margin: 20,
  },
  footer: {
    textAlign: "center",
  },
  page: {
    backgroundColor: "#381155",
    color: "white",
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
      <header>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* Here we are calling the renderPage function which will return a component  */}
        {renderPage()}
      </header>
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
