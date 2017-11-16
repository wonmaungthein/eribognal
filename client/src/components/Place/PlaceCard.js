import React from 'react';

const PlaceCard = props => {
    const place = props.place;
    return (
        <div>
            <ul>
                <li> Name: {place.name} </li>
                <li> Description: {place.description} </li>
                <li> Category:   {place.category} </li>
            </ul>
        </div>
    )
}

export default PlaceCard;
