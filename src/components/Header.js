import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import SearchForm from "./SearchForm";
import WelcomePage from "./WelcomePage";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Router>
      <Link to="/components/WelcomePage">Homepage</Link>
      <Link to="/components/SearchForm">Characters</Link>
      <Switch>
      <Route path="/components/SearchForm"><SearchForm /></Route>
      <Route path="/components/WelcomePage"><WelcomePage /></Route>
      </Switch>
      </Router>
    </header>
  );
}
