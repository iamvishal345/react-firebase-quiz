import React from "react";
import "./App.scss";
import Home from "components/home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Game from "components/game";
import HighScores from "components/scores";
import Footer from "components/footer";
import Header from "components/header";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header></Header>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/highScores" component={HighScores} />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
