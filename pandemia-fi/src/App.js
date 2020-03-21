import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/news">
            <LandingPage />
          </Route>
          <Route path="/actions">
            <LandingPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
