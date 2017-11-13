import React from 'react';
import PlaceCard from '../../components/Place/PlaceCard';
import apiClient from '../../helpers/apiClient';
import AddPlaceButton from '../../components/Place/AddPlaceButton'


class PlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };
    }

    componentDidMount() {
        apiClient.getPlaces()
            .then(({ data }) => {
                this.setState({
                    places: data
                });
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.places.map((place) => {
                        return (
                            <PlaceCard place={place} />
                        )
                    })
                }
                <AddPlaceButton />
            </div>
        )
    }
}

export default PlacesList; 