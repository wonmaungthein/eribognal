import React, { Component } from "react";
import "./App.css";
import Menu from "../../components/Menu/Menu";
import About from "../../components/About/About";
import viewPlace from "../../components/Place/ViewSinglePlace";
import PlacesList from "../PlaceList/PlaceList";
import AddPlaceForm from "../PlaceList/AddPlaceForm";
import Questions from "../Questionnaire/Questions";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Themes from "../../Themes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../../components/HomeScreen/HomeScreen";
import PreHomeScreen from "../../components/PreHomeScreen/PreHomeScreen";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className="containerFlex">
          <div className="containerApp">
            <div className={classes.root}>
              <Menu />
              <Route exact path="/" component={PreHomeScreen} />
              <Route exact path="/Home" component={HomeScreen} />
              <Route path="/about" component={About} />
              {/* <Route path="/questionnaire" component={Questions} /> */}
              <Route path="/questionnaire" component={Questions} />
              <Route exact path="/places/:placeId" component={viewPlace} />
              <Route exact path="/places" component={PlacesList} />
              <Route path="/new-place" component={AddPlaceForm} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(Themes)(App);
