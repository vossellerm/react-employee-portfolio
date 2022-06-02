import React from "react";

const styles = {
  active: {
    color: "white",
  },
  inactive: {
    color: "#C9A8F1",
  },
  name: {
    fontSize: 50
  },
  nav: {
    fontSize: 30
  }
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <h1 class="navbar-brand" style={styles.name}>Lernantino</h1>
      </div>
      <ul className="navbar-nav" style={styles.nav}>
        <li className="nav-item w-25 p-3">
          <a
            href="#aboutMe"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
            style={currentPage === "AboutMe" ? styles.active : styles.inactive}
          >
            About Me
          </a>
        </li>
        <li className="nav-item w-25 p-3">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            style={
              currentPage === "Portfolio" ? styles.active : styles.inactive
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item w-25 p-3">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={currentPage === "Contact" ? styles.active : styles.inactive}
          >
            Contact
          </a>
        </li>
        <li className="nav-item w-25 p-3">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            style={currentPage === "Resume" ? styles.active : styles.inactive}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
