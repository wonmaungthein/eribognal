import React from 'react';
import apiClient from '../../helpers/apiClient';

class viewPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place:""
        };
    }

    componentDidMount() {
        apiClient.viewPlaces()
            .then(({ data }) => {
                this.setState({
                    place: data
                });
            })
            .catch((err) => { })    
    }
    
    display = (placeId) => {
        apiClient.viewPlace()
        .then(({data}) => {
            this.setState({
                place: data
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.place.map((place, index) => {
                        return (
                            <div key={index}>
                           { place.title }
                           {<button onClick={() => this.display(place._id)}>view</button>} 
                            </div>
                        )
                    })
                }
             
            </div>
        )
    }
}

export default viewPlace; 