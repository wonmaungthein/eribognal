import React from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';

const styles = ({
    addressContainer: {
        display: 'flex',
        flexDirection: "column",
    }
});

class Address extends React.Component {

    render() {
        const classes = this.props;
        return (
            <div style={styles.addressContainer}>
                <TextField
                    label="Address line 1"
                    value={this.props.line1}
                    onChange={(event) => this.props.onChange(event, "line1")}
                    type="text"
                    name="line1"
                    placeholder="Address line 1" />
                <TextField
                    label="Address line 2"
                    value={this.props.line2}
                    onChange={(event) => this.props.onChange(event, "line2")}
                    type="text"
                    name="line2"
                    placeholder="Address line 2" />
                <TextField
                    label="postcode"
                    value={this.props.postcode}
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    floatingLabelText='Address of the Place'
                    onChange={(event) => this.props.onChange(event, "postcode")}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="City">Select City</InputLabel>
                    <Select style={styles}
                        value={this.props.city}
                        onChange={(event) => this.props.onChange(event, "city")}
                        name="city">
                        <MenuItem value="Glasgow">Glasgow</MenuItem>
                    </Select>
                </FormControl >
            </div>
        )
    }
}

export { Address };

