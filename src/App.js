import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Game from "./components/Game";
import HighScores from "./components/HighScores";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/highScores" component={HighScores} />
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
