import React, { useState, useRef, useEffect } from "react";

import { links } from "../utils/data";
import classes from "./navbar.module.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className={classes.nav}>
      <div className={classes["nav-center"]}>
        <div className={classes["nav-header"]}>
          <h2 className={classes.logo}>{"<devmouad>"}</h2>
          <button
            type="button"
            className={classes["nav-toggle"]}
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div className={classes["links-container"]} ref={linksContainerRef}>
          <ul className={classes.links} ref={linksRef}>
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
