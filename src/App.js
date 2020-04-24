import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer";


const App = () => (
  <Router>
    <Switch>    
      <Route path="/">
        <Disclaimer />
      </Route>
    </Switch>
  </Router>
);

export default App;