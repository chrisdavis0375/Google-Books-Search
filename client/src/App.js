import React from "react";
import Books from "./pages/Books";
//import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Test from "./components/Test/index";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Books} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
