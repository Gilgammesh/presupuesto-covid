import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tablero from "../views/Tablero/Index";
import TableroEjec from "../views/TableroEjec/Index";
import Login from "../views/Login/Index";
import UpdateData from "../views/UpdateData/Index";

const Index = () => {
  return (
    <Router>
      <Switch>
        {/*<Route path="/" exact render={() => <Login />} />*/}
        <Route path="/presupuesto/covid" exact render={() => <Tablero />} />
        <Route
          path="/presupuesto/covid/:ejec"
          exact
          render={({ match }) => <TableroEjec match={match} />}
        />
        <Route path="/presupuesto/updatedata" exact render={() => <UpdateData />} />
        <Route path="/login" exact render={() => <Login />} />        
      </Switch>
    </Router>
  );
};

export default Index;
