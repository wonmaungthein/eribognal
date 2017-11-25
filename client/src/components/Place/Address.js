import React from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';


const styles = ({
    addressContainer: {
        display: 'flex',
        flexDirection: "column",
    }
});


class Address extends React.Component {

    render() {
        const classes = this.props;
        console.log(this.props.city)
        return (
            <div style={styles.addressContainer}>
                <TextField
                    value={this.props.line1}
                    type="text"
                    name="line1"
                    hintText='Line 1'
                    placeholder="Address line 1"
                    floatingLabelText='Address of the Place'
                    onChange={(event) => this.props.onChange(event, "line1")}
                />
                <TextField
                    value={this.props.line2}
                    type="text"
                    name="line2"
                    hintText='line 2'
                    placeholder="Address line 2"
                    floatingLabelText='Address of the Place'
                    onChange={(event) => this.props.onChange(event, "line2")}

                />
                <TextField
                    value={this.props.postcode}
                    type="text"
                    name="postcode"
                    hintText='postcode'
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

                        <MenuItem value="-1">Select City</MenuItem>
                        <MenuItem value="Glasgow">Glasgow</MenuItem>
                    </Select>
                </FormControl >
            </div>
        )
    }
}

export { Address };

