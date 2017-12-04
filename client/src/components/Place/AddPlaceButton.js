import React from 'react';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/Button';
import { NavLink } from "react-router-dom";
import  Add  from 'material-ui-icons/Add';

const iconStyles = {
    width: 450,
    marginLeft: 100,
    fontSize: 12,
};

const AddPlaceButton = () => (
    <div>
        <RaisedButton style={iconStyles}>
            <IconButton tooltip="SVG Icon" >
                <Add />
            </IconButton>
            <NavLink to="/new-place">Suggest New Place</NavLink>
        </RaisedButton>
    </div>

);

export default AddPlaceButton;

