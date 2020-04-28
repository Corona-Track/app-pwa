import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"
import Photography from  "./pages/Photography"
import Home from "./pages/Home"
import RiskProfile from "./pages/RiskProfile"



const App = () => (

  <Router>
    <Switch>     
      <Route path="/Disclaimer" component={Disclaimer} />     
      <Route path="/login" component={Login}/>
      <Route path="/signUp" component={SingUp}/>
      <Route path="/riskProfile" component={RiskProfile}/>
      <Route path="/photo" component={Photography}/>
      <Route path ="/home" component={Home}/>
    </Switch> 
  </Router>
);

export default App;