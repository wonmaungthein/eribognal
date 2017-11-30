import React from 'react';
import PlaceCard from '../../components/Place/PlaceCard';
import apiClient from '../../helpers/apiClient';
import AddPlaceButton from '../../components/Place/AddPlaceButton'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FilterCatagory from '../../components/Place/FilterCatagory';

const styles = ({
    listPlaces: {
        display: "flex",
        flexDirection: "row",
        alignSelf: "baseline",
        paddingLeft: 10,
        margin: 0,
    },
    gridStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    }
});

class PlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            selectedCatagory: []
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

    onSelect = event => {
        const value = event.target.value;
        this.setState({
            selectedCatagory: value
        })
    };
    render() {
        const filtered = this.state.places.filter(place => place.category === this.state.selectedCatagory);
        return (
            <Grid container spacing={24} className="listPlaces" style={styles.gridStyle}>
                <FilterCatagory selectedCatagory={this.state.selectedCatagory}
                    onSelect={(event) => this.onSelect(event)} />
                {filtered.map((place) => {
                    return (
                        <div>
                            <Grid item xs={12} >
                                <PlaceCard place={place} />
                            </Grid>
                        </div>
                    )
                })
                }
                <AddPlaceButton />
            </Grid>
        )
    }
}
export default withStyles(styles)(PlacesList); 