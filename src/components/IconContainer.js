import React from "react";

import classes from "./iconContainer.module.css";

import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import jsLogo from "../assets/javascript-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import expressLogo from "../assets/express-logo.svg";
import mongoLogo from "../assets/mongodb-logo.svg";
import nodejsLogo from "../assets/nodejs-logo.svg";
import gitLogo from "../assets/git-logo.svg";
import postgreLogo from "../assets/postgresql-logo.svg";

const IconContainer = () => {
  return (
    <div className={classes["icons-container"]}>
      <img src={htmlLogo} alt="html logo" className={classes["tech-icon"]} />
      <img src={cssLogo} alt="css logo" className={classes["tech-icon"]} />
      <img
        src={jsLogo}
        alt="javascript logo"
        className={classes["tech-icon"]}
      />
      <img src={reactLogo} alt="react logo" className={classes["tech-icon"]} />
      <img
        src={nodejsLogo}
        alt="nodejs logo"
        className={classes["tech-icon"]}
      />
      <img
        src={expressLogo}
        alt="express logo"
        className={classes["tech-icon"]}
      />
      <img src={mongoLogo} alt="mongo logo" className={classes["tech-icon"]} />

      <img
        src={postgreLogo}
        alt="postgre logo"
        className={classes["tech-icon"]}
      />
      <img src={gitLogo} alt="git logo" className={classes["tech-icon"]} />
    </div>
  );
};

export default IconContainer;
