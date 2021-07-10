import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Live from "./page/live";
import Admin from "./page/admin";
import Schedule from "./page/schedule";
import axios from 'axios';
    
axios.defaults.baseURL = 'http://38.34.36.153:80';

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/live' component={Live} />
			<Route path='/admin' component={Admin} />
			<Route path='/schedule' component={Schedule} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
