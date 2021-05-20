import React, { useEffect, useState } from "react";
import "./App.scss";
import classNames from "classnames";

import Home from "pages/home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "components/footer";
import Header from "components/header";

import Game from "pages/game";
import HighScores from "pages/scores";
import Categories from "pages/categories";

function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDark(true);
    }
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setDark(e.matches);
      });
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (e) => {
          setDark(e.matches);
        });
    };
  }, []);
  return (
    <Router>
      <div className={classNames("app-container", { dark })}>
        <Header value={dark} setValue={setDark}></Header>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game/:gameId/:difficulty" component={Game} />
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
