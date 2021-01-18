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
      <div className="container">
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/highScores" component={HighScores} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
