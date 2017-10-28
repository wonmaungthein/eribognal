import React, { Component } from 'react';

const PlaceCard = props => {
    const place = props.place;
    return (
        <div>
            <ul>
                <li> Title: {place.title} </li>
                <li> Description: {place.description} </li>
                <li> Category:   {place.category} </li>
            </ul>
        </div>
    )
}

export default PlaceCard;
