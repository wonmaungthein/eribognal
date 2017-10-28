import React from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

const Menu = () => (
        <div className="NavMenu">
            <ul>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/questionnaire">Questions</NavLink></li>
                <li><NavLink to="/places">Places</NavLink></li>
                

            </ul>
        </div>
);

export default Menu;
