import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink className={styles.navlink} to="/">
        PROJETS
      </NavLink>
      <NavLink className={styles.navlink} to="/contact/">
        CONTACT
      </NavLink>
    </div>
  );
};
