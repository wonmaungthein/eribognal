import React from 'react';
import { withStyles } from 'material-ui/styles';
import CategoryIcon from '../CategoryIcon/CategoryIcon'
import Avatar from 'material-ui/Avatar';
import Card, { CardContent } from 'material-ui/Card'
import Grid from 'material-ui/Grid';


const styles = ({
    listTitle: {
        fontSize: 20,
        color: "rgba(0,0,0,0.87)",
        letterSpacing: 0
    },

    listSeparator: {
        color: "#E0E0E0"
    },

    listAddress: {
        fontSize: 14,
        color: "rgba(0,0,0,0.54)"
    },

    cardList: {
        borderBottom: '1px solid  #E0E0E0',
        padding: '10px'
    },

    listDetails: {
        fontSize: 14,
        color: "rgba(0,0,0,0.54)",
        lineHeight: 0.1,
        marginTop: 0,
    }
});


const PlaceCard = props => {
    const place = props.place;
    return (
        <div style={styles.cardList}>
            <Grid container spacing={24} >
                <Grid item xs={4} style={{ textAlign: 'center' }}>
                    <CategoryIcon category={place.category} />
                </Grid>
                <Grid item xs={8} style={{ paddingTop: 0 }}>
                    <p style={styles.listTitle}> {place.name} </p>
                    <p style={styles.listAddress}>{place.category} </p>
                    <p style={styles.listDetails}> {place.description} </p>
                </Grid>
            </Grid>
        </div>
    )
};

export default withStyles(styles)(PlaceCard);
