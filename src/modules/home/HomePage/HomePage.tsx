import React from "react";
import styles from "./styles.module.scss";
import { Projects } from "../../projects";

export const HomePage = () => {
  return (
    <div>
      <div className={styles.title}>Julie TOXÉ - UX/UI Design</div>
      <Projects />
    </div>
  );
};
