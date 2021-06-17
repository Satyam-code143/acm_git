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
    <Router>
      {/* <Suspense fallback={<Loading />}> */}
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default RootRouting;
