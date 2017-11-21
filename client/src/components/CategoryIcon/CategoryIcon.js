import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';

const styles = ({
   listIcon: {
        width: 56,
        height: 56,
    }})

const iconsMap = {
    'Night Out': 'night-out',
    'Growing Project': 'growing-project',
    'Shopping': 'shopping',
    'Eating Out': 'eating-out'
}
const Icon = props => {
    const category = props.category 
    const fileName = iconsMap[category]
    return (
        <img src={`../../icons/categories/icon-${fileName}.png`}  style={styles.listIcon}  />
    )
};

export default (Icon);