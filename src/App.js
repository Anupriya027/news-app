import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import News from "./News";
import Header from "./component/Header";
import Footer from "./component/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Home from './pages';
import Covid from "./pages/Covid";
import Finance from "./pages/Finance";
import Entertainment from "./pages/Entertainment";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import International from "./pages/International";
import Navigation from "./component/Navigation";
// import Searchbar from './component/Searchbar';

import { SearchProvider } from "./store";

class App extends Component {
  /*componentDidMount(){

}*/
  render() {
    return (
      <div className="App">
        <SearchProvider>
          <Header></Header>
          <Navigation></Navigation>
          <Router>
            <Switch>
              <Route path="/" component={News} />
              <Route path="/covid" component={Covid} />
              <Route path="/Finance" component={Finance} />
              <Route path="/Sports" component={Sports} />
              <Route path="/International" component={International} />
              <Route path="/Politics" component={Politics} />
              <Route path="/Entertainment" component={Entertainment} />
            </Switch>
          </Router>
          <Footer />
        </SearchProvider>
      </div>
    );
  }
}

export default App;
