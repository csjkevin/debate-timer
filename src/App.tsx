import React from "react";
import { Helmet } from "react-helmet";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import Index from "./pages/Index";
import Stage1 from "./pages/Stage1";
import Stage2 from "./pages/Stage2";
import Stage3 from "./pages/Stage3";
import Stage4 from "./pages/Stage4";

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>辩论赛计时器</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className={styles.container}>
        <Router>
          <Switch>
            <Route path="/stage1">
              <Stage1 />
            </Route>
            <Route path="/stage2">
              <Stage2 />
            </Route>
            <Route path="/stage3">
              <Stage3 />
            </Route>
            <Route path="/stage4">
              <Stage4 />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
