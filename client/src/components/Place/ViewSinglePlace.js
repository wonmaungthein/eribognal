import React from 'react';
import apiClient from '../../helpers/apiClient';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import CategoryIcon from '../CategoryIcon/CategoryIcon'


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
        flexDirection: "row",
        alignItems: "stretch",
        margin: 20
    },
    listDetails: {
        fontSize: 18,
        color: "rgba(0,0,0,0.54)",
        lineHeight: 0.1,
        marginTop: 10,
    },
    listTitle: {
        fontSize: 20,
        color: "rgba(0,0,0,0.87)",
        letterSpacing: 0
    },
});



class viewPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            place: {},
        };
    }

    componentDidMount() {
        let { placeId } = this.props.match.params

        apiClient.viewSinglePlace(placeId)
            .then(({ data }) => {
                this.setState({
                    place: data,
                });
            })
            .catch((err) => { console.log(err) })
    }

    _renderAddress = (place) => {
        if (!place.address) {
            return null
        }
        return (
            <div><p style={styles.listDetails}> {place.address.line1} </p>
                <p style={styles.listDetails}> {place.address.line2} </p>
                <p style={styles.listDetails}> {place.address.postcode} </p>
                <p style={styles.listDetails}> {place.address.city} </p></div>);
    }


    render() {
        let place = this.state.place;
        if (!place._id) {
            return null;
        }

        return (
            <div>
                <Grid container spacing={24} style={styles.gridStyle}>
                    <Grid item xs={4}>
                        <CategoryIcon category={place.category} style={{ textAlign: 'center' }} />
                    </Grid>
                    <Grid item xs={8} style={{ paddingTop: 0 }}>
                        <div>
                            <p style={styles.listAddress}>{place.name} </p>
                            <p style={styles.listDetails}> {place.description} </p>
                            <p style={styles.listDetails}> {place.category} </p>
                            <p style={styles.listDetails}> {place._id} </p>
                            {this._renderAddress(place)}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default viewPlace; 