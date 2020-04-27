import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Disclaimer from "./pages/Disclaimer";
// import Login from "./pages/Login"
// import SingUp from "./pages/SingUp"
// import Photography from  "./pages/Photography"
// import Home from "./pages/Home"
import Symptoms from "./pages/Symptoms"

const App = () => (
    
  <Router>
    <Switch>    
      {/* <Route path="/d" exact>
        <Disclaimer />
      </Route>
      <Route path="/login">
      	<Login/>
      </Route>
      <Route path="/signUp">
      	<SingUp/>
      </Route>
      <Route path="/photo">
      	<Photography/>
      </Route>
      <Route path ="/home">
      	<Home/>
      </Route> */}
      <Route path ="/">
      	<Symptoms />
      </Route>
      
    </Switch> 
  </Router>
);

export default App;