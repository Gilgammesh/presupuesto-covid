import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tablero from "../views/Tablero/Index";
import Login from "../views/Login/Index";
import Admin from "../views/Admin/Index";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Tablero />} />
        <Route path="/covid" exact render={() => <Tablero />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/admin" exact render={() => <Admin />} />
      </Switch>
    </Router>
  );
};

export default Index;
