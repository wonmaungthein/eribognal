import React from 'react';
import PlaceCard from '../../components/Place/PlaceCard';
import apiClient from '../../helpers/apiClient';
import AddPlaceButton from '../../components/Place/AddPlaceButton'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Card, { CardContent } from 'material-ui/Card'

const styles = ({
    listPlaces: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "baseline",
        paddingLeft: 10,
        margin: 0,
    },
    listSeparator: {
        color: "#E0E0E0",
    },

    listIcon: {
        width: 40,
        height: 40,
        border: "none",
        background: "transparent",
        borderRadius: 0,
    },
    cardList: {
        display: "flex",
        flexDirection: "column",  
        alignItems: "flex-start",
        paddingLeft: 20,
        marginLeft: 10,
        paddingTop: 15,
       
    }
});

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
            <Grid container spacing={24} className="listPlaces" style={ 
                {display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                }}>
                {
                    this.state.places.map((place) => {
                        return (
                            <div>
                                <Grid item xs={12}>
                                    <Card className="cardList" style={styles.cardList}>
                                        <Avatar>
                                            <img src="../icon-growing-project.jpg" style={styles.listIcon} />
                                        </Avatar>
                                        <CardContent className="cardText">
                                            <PlaceCard place={place} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className="cardList" style={styles.cardList}>
                                        <Avatar>
                                            <img src="../icon-local-drink.jpg" style={styles.listIcon} />
                                        </Avatar>
                                        <CardContent className="cardText">
                                            <PlaceCard place={place} />
                                        </CardContent>
                                    </Card>
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