import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import PersonalResume from "./pages/home/PersonalResume";
import Page404 from "./pages/others/Page404";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route exact path={`/`} component={PersonalResume} />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
