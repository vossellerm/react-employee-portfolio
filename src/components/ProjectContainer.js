import React from "react";

const styles = {
  card: {
    width: "25rem",
  },
};

export default function ProjectContainer() {
  return (
    <div className="d-inline-flex p-2">
  <div className="card " style={styles.card}>
    <h5 className="card-title mx-auto my-2">Project title</h5>
    <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640" className="card-img-top" alt />
    <div className="d-inline-flex p-2">
      <a href="#" className="btn btn-primary mx-auto">
        Deployed Application
      </a>
      <a href="#" className="btn btn-primary mx-auto">
        GitHub Repository
      </a>
    </div>
  </div>
</div>

  );
}
