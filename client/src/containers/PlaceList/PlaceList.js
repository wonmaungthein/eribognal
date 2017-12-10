import React from 'react';
import PlaceCard from '../../components/Place/PlaceCard';
import apiClient from '../../helpers/apiClient';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FilterCatagory from '../../components/Place/FilterCatagory';
import Spinner from '../../components/Spinner/Spinner';

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
            selectedCatagory: "-1",
            isLoading: false
        };
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        })
        apiClient.getPlaces()
            .then(({ data }) => {
                setTimeout(() => {this.setState({isLoading: false})}, 1000)
                this.setState({
                    places: data,
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
        if (this.state.isLoading) {
            return <Spinner />
        } else {
            let filtered = ""
            if (this.state.selectedCatagory === "-1") {
                filtered = this.state.places
            } else {
                filtered = this.state.places.filter(place => place.category === this.state.selectedCatagory);
            }
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
                </Grid>
            )
        }
    }
}
export default withStyles(styles)(PlacesList); 