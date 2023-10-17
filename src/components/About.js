import React from "react";

import IconContainer from "./IconContainer";
import classes from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={classes["about-section"]}>
      <div>
        <h3 className="section-title">About Me</h3>
        <div className={classes["about-content"]}>
          <p>
            I'm Mouad, an independent full-stack web developer from Morocco,
            dedicated to building applications and online experiences for
            businesses of all sizes.
          </p>
          <p>
            I specialize in the MERN stack (MongoDB, Express, React, and
            Node.js), as well as PostgreSQL as my preferred database solution.
            This combination of technologies allows me to craft dynamic,
            high-performance web applications with an emphasis on scalability
            and reliability.
          </p>
          <p>
            Whether you're a startup aiming to make a bold impression or an
            established business seeking to enhance your web presence, you can
            get in touch and let's embark on this exciting journey together!
          </p>
        </div>
      </div>
      <IconContainer />
    </section>
  );
};

export default About;
