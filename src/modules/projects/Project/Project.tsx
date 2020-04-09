import React from "react";
import styles from "./styles.module.scss";
import { RouteComponentProps } from "react-router-dom";

export type ProjectProps = RouteComponentProps<{ id: string }>;

export const Project = ({ match }: ProjectProps) => {
  return (
    <div>
      <div className={styles.title}>Projet</div>
      {match.params.id}
    </div>
  );
};
