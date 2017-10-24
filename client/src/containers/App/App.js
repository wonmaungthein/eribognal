import React, { Component } from 'react';
import './App.css';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About </Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

