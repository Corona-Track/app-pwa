import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"
import Photography from  "./pages/Photography"


const App = () => (

  <Router>
    <Switch>    
      <Route path="/" exact>
        <Disclaimer />
      </Route>
      <Route path="/login">
      	<Login/>
      </Route>
      <Route path="/signUp">
      	<SingUp/>
      </Route>
      <Route path="/">
      	<Photography/>
      </Route>
    </Switch>
  </Router>
);

export default App;