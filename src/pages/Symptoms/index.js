import React, { useState } from 'react'
import { BrowserRouter as Router, useHistory,Switch, Route, Link } from "react-router-dom";
import SymptomsPage from './symptom';
import ReportSymptomsPage from './reportsymptoms';

export default function SymptomMainPage() {
    const history = useHistory();
	return (
        <Router>
        <Switch>    
          <Route path ="/report">
              <ReportSymptomsPage />
          </Route>
          <Route path ="/">
              <SymptomsPage />
          </Route>
        </Switch> 
      </Router>
    )
}