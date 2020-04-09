import React from "react";
import styles from "./styles.module.scss";
import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
  return (
    <div>
      <div className={styles.title}>
        <b>Liste des projets</b>
        <ProjectCard
          id="sporteasy"
          name="SportEasy"
          description="2018 - Aujourd'hui"
        />
        <ProjectCard id="molotov" name="Molotov" description="Vive la télé" />
        <ProjectCard
          id="cdiscount"
          name="Cdiscount"
          description="Super boite"
        />
      </div>
    </div>
  );
};
