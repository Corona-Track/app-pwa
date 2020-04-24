import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"


const App = () => (

  <Router>
    <Switch>    
      <Route path="/disclaimer">
        <Disclaimer />
      </Route>
      <Route path="/login">
      	<Login/>
      </Route>
      <Route path="/">
      	<SingUp/>
      </Route>
    </Switch>
  </Router>
);

export default App;