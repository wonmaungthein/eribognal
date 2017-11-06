import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/Menu/Menu';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';
import viewPlace from '../../components/Place/ViewSinglePlace'
import PlacesList from '../PlaceList/PlaceList';
import Questions from '../Questionnaire/Questionnaire';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Themes from '../../Themes';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
                <Menu />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/questionnaire" component={Questions} />
                <Route path="/places" component={PlacesList} />
                <Route path="/places/:placeId" component={viewPlace} /> 
              </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default withStyles(Themes)(App);

