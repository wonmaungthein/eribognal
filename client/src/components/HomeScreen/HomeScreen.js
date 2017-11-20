import React from 'react';
import './homeScreen.css';
import {Link} from 'react-router-dom';

const HomeScreen = () => {
    return <div>
        <div className="main">
            <div className="overlay"></div>
            <div className="first-content">
                <div className="question-header">
                    <Link to="/questionnaire">Questionnaire</Link> 
                </div>
                <div className="question-footer">
                    <h5>10 out of 20 questions answered</h5>
                </div>
                <img className="img-control" src="home-screen-one-539431.jpeg" alt="home screen one" />
            </div>
            <div className="second-content">
                <div className="food-map-header">
                    <Link to="/places">Food map</Link> 
                </div>
                <div className="food-map-footer">
                    <h5>Find sustainable in Glasgow</h5>
                </div>
                <img className="img-control" src="home-screen-two-76093.jpeg" alt="home screen two" />
            </div>
        </div>
    </div>
}
export default HomeScreen;
