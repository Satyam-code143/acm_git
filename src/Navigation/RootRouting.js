import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Events from "../Pages/Events/Events";
import LandingPage from "../Pages/Landing/LandingPage";
import Team from "../Pages/Team/Team";

function RootRouting(props) {
  return (
    <Router basename="/acm_git/">
      {/* <Suspense fallback={<Loading />}> */}
      <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        {/* <Route exact path="/" component={Events} /> */}
        <Route exact path="/" component={Team} />
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default RootRouting;
