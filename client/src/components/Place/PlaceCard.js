import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import CategoryIcon from '../CategoryIcon/CategoryIcon'
import Avatar from 'material-ui/Avatar';
import Card, { CardContent } from 'material-ui/Card'


const styles = ({
    listTitle: {
        fontSize: 20,
        color: "rgba(0,0,0,0.87)",
        letterSpacing: 0,
        lineHeight: 1.8,
        marginTop: -12,
        marginBottom: 0
    },

    listSeparator: {
        color: "#E0E0E0"
    },
    cardList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingLeft: 20,
        marginLeft: 10,
        paddingTop: 15,
    },

    listAddress: {
        fontSize: 14,
        color: "rgba(0,0,0,0.54)",
        lineHeight: 2.1,
        marginTop: 0,

    },

    listDetails: {
        fontSize: 14,
        color: "rgba(0,0,0,0.54)",
        lineHeight: 0.1,
        marginTop: 0,
    },
    listItem: {
        display: "flex",
        flexDirection: "column",
        marginTop: -95,
        paddingLeft: 35,
    },
});


const PlaceCard = props => {
    const place = props.place;
    return (
            <div>
                <Card style={styles.cardList}>
                    <Avatar>
                        <CategoryIcon category={place.category} />
                    </Avatar>
                    <CardContent>
                        <p style={styles.listTitle}> {place.name} </p>
                        <p style={styles.listAddress}>{place.category} </p>
                        <p style={styles.listDetails}> {place.description} </p>
                    </CardContent>
                </Card>
            </div>
    )
};

export default withStyles(styles)(PlaceCard);
