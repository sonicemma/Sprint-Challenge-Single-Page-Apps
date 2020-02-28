import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <main>
      <div>
      <Header />
      <Link to="/components/WelcomePage/">Homepage</Link>
      <Link to="/components/CharacterList/">Character Page</Link>
  
    <Switch>
      <Route path="/components/WelcomePage/">
        <WelcomePage />
      </Route>
      <Route path="/components/CharacterList/">
        <CharacterList />
        <SearchForm />
      </Route>
    </Switch>
    </div>
    </main>
    </Router>
  );
}
