import React from "react";

const styles = {
  active: {
    color: "red",
  },
  inactive: {
    color: "blue",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <h1 class="navbar-brand">Lernantino</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
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
        <li className="nav-item">
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
        <li className="nav-item">
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
        <li className="nav-item">
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
