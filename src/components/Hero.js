import React from "react";

import classes from "./hero.module.css";
import heroImg from "../assets/me.jpg";

const Hero = () => {
  return (
    <section>
      <div className={classes["hero-container"]}>
        <div>
          <h1 className={classes["hero-header"]}>
            Hi, I am Mouad,
            <br />
            Full-Stack
            <br />
            Web Developer
          </h1>
          <p className={classes["hero-description"]}>
            Whether you're a startup seeking a compelling online presence or an
            established enterprise aiming to revamp your digital footprint, I'm
            here to transform your ideas into an online reality that leaves a
            lasting impact.
          </p>
          <button className="btn">Contact Me</button>
        </div>
        <div>
          <img src={heroImg} alt="hero img" className={classes["hero-img"]} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
