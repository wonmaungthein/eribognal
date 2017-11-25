import React from 'react';

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
        <img alt={""} src={`../../icons/categories/icon-${fileName}.png`}  style={styles.listIcon}  />
    )
};

export default (Icon);