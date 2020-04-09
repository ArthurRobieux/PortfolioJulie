import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

export type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
};

export const ProjectCard = ({ id, name, description }: ProjectCardProps) => {
  return (
    <NavLink to={`/project/${id}/`} className={styles.projectCard}>
      <div className={styles.title}>{name}</div>
      <div className={styles.text}>{description}</div>
    </NavLink>
  );
};
