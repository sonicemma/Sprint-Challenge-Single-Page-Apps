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
    <main>
      <div>
        <Header />
    </div>
    </main>
  );
}
