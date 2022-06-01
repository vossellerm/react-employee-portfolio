import React from "react";

const styles = {
  card: {
    width: "25rem",
  },
};

export default function ProjectContainer() {
  return (
    <div class="d-inline-flex p-2">
      <div class="card " style={styles.card}>
        <h5 class="card-title mx-auto my-2">Project title</h5>
        <img
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          class="card-img-top"
          alt=""
        />
        <div class="d-inline-flex p-2">
          <a href="#" class="btn btn-primary mx-auto">
            Deployed Application
          </a>
          <a href="#" class="btn btn-primary mx-auto">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
