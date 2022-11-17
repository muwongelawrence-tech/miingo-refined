import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Messages from "./components/Messages";


function App() {
  return (
    <>
      <Router>

           <Switch>
              <Route path="/" exact component = { Home } />
              <Route path="/messages" exact component = { Messages } />
            </Switch>

           
      </Router>
    </>
  );
}

export default App;
