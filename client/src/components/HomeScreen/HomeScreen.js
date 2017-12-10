import React from 'react';
import './homeScreen.css';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return <div>
        <div className="main">
            <div className="first-content">
                <Link to="/questionnaire">
                    <div className="firstOverlay"></div>
                </Link>
                <div className="question-header">
                    <Link to="/questionnaire">Questionnaire</Link>
                </div>
                <img className="img-control" src="home-screen-one-539431.jpg" alt="home screen one" />
            </div>
            <div className="second-content">
                <Link to="/places">
                    <div className="secondOverlay"></div>
                </Link>
                <div className="food-map-header">
                    <Link to="/places">Food map</Link>
                </div>
                <img className="img-control" src="home-screen-two-76093.jpg" alt="home screen two" />
            </div>
        </div>
    </div>
}
export default HomeScreen;
