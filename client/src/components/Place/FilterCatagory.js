import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = {
    customWidth: {
        width: 150,
        paddingLeft: 35,
    },
};

const FilterCatagory = props => {
    return (
        <div>
            <FormControl >
                <Select style={styles.customWidth}
                    value={props.selectedCatagory}
                    checked={Option.value === props.selectedCatagory}
                    onChange={props.onSelect}
                    name="selectedCatagory">
                    <MenuItem value="-1">Show All</MenuItem>                    
                    <MenuItem value="Growing Project">Growing Project</MenuItem>
                    <MenuItem value="Night Out">Night Out</MenuItem>
                    <MenuItem value="Shopping">Shopping</MenuItem>
                    <MenuItem value="Eating Out">Eating Out</MenuItem>
                </Select>
            </FormControl >
        </div>
    );
}

export default FilterCatagory;