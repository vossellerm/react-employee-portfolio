import React from "react";
import avatar from "../../assets/images/avatar.png";

const styles = {
  avatar: {
    width: "100px",
  },
  bio: {
    fontSize: 20,
  },
};

export default function AboutMe() {
  return (
    <div>
      <h1 className="my-4 ms-5">About Me</h1>
      <div>
        <img src={avatar} alt="" style={styles.avatar} className="mb-4 ms-5" />
      </div>
      <p className="ms-5 w-75" style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}
