import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Live from "./page/live";
import Admin from "./page/admin";

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/live' component={Live} />
			      <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
