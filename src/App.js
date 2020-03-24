import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/index";
import { Home } from "./pages/home/index";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    </>
  );
};

export default App;
