import React from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";

const Menu = () => (
        <div className="NavMenu">
            <ul>
                <li><NavLink to="/">Home </NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
            </ul>
        </div>
);

export default Menu;
