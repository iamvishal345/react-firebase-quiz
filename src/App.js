import React from "react";
import "./App.scss";
import Home from "pages/home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "components/footer";
import Header from "components/header";

import Game from "pages/game";
import HighScores from "pages/scores";
import Categories from "pages/categories";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game/:gameId" component={Game} />
            <Route path="/categories" component={Categories} />
            <Route path="/highScores" component={HighScores} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
