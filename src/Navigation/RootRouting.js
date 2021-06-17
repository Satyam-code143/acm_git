import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "../Pages/Landing/LandingPage";

function RootRouting(props) {
  return (
    <Router basename="/acm_git/">
      {/* <Suspense fallback={<Loading />}> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default RootRouting;
