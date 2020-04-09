import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import styles from "./styles.module.scss";
import { HomePage } from "../modules/home";
import { Contact } from "../modules/contact";
import { Menu } from "../modules/common-ui";
import { Project } from "../modules/projects/Project/Project";

export const App = withRouter(() => {
  return (
    <div className={styles.app}>
      <Menu />
      <Switch>
        <Route exact path="/project/:id/" component={Project} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
});
