import React from "react";


const styles = {
  card: {
    width: "25rem",
  },
};

export default function ProjectContainer() {
  return (
    <div>
     
      <div class="card" style={styles.card}>
        <img
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          class="card-img-top"
          alt=""
        />
      </div>
    </div>
  );
}
