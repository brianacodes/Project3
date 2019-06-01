import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Portal from "./pages/Portal";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";

// import logo from "./logo.svg";
import "./App.css";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/portal" component={Portal} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
