import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/Menu/Menu';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';
import Questions from '../Questionnaire/Questionnaire';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/questionnaire" component={Questions} />
        </div>
      </Router>
    );
  }
}

export default App;

