import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import News from "./news";
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
// // import Searchbar from './component/Searchbar';

import { SearchProvider } from "./store";

class App extends Component {
  /*componentDidMount(){

}*/
  render() {
    return (
      <Router>
        <div className="App">
          <SearchProvider>
            <Header></Header>
            <Navigation></Navigation>

            <Switch>
              <Route exact path="/" component={News} />
              <Route exact path="/Covid" component={Covid} />
              <Route exact path="/Finance" component={Finance} />
              <Route exact path="/Sports" component={Sports} />
              <Route exact path="/International" component={International} />
              <Route exact path="/Politics" component={Politics} />
              <Route exact path="/Entertainment" component={Entertainment} />
            </Switch>

            <Footer />
          </SearchProvider>
        </div>
      </Router>
    );
  }
}

export default App;
