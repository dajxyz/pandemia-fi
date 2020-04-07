import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Message } from "theme-ui";

import Layout from "./components/layout";
import LandingPage from "./pages/landing";
import Uutishuone from "./pages/uutishuone";
import Tietopankki from "./pages/tietopankki";
import About from "./pages/about";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/uutishuone">
            <Uutishuone />
          </Route>
          <Route path="/tietopankki">
            <Tietopankki />
          </Route>
          <Route path="/sivustosta">
            <About />
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
