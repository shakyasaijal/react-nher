import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import Landing from "./components/landing";
import Footer from "./components/common/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
