import React from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';

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
            <Grid container spacing={24}>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Address line 1"
                        value={this.props.address.line1}
                        onChange={(event) => this.props.onChange(event, "line1")}
                        type="text"
                        name="line1"
                        placeholder="Address line 1" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Address line 2"
                        value={this.props.address.line2}
                        onChange={(event) => this.props.onChange(event, "line2")}
                        type="text"
                        name="line2"
                        placeholder="Address line 2" />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Postcode"
                        value={this.props.address.postcode}
                        type="text"
                        name="postcode"
                        placeholder="Postcode"
                        floatingLabelText='Address of the Place'
                        onChange={(event) => this.props.onChange(event, "postcode")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="City">Select City</InputLabel>
                        <Select style={styles}
                            value={this.props.address.city}
                            onChange={(event) => this.props.onChange(event, "city")}
                            name="city">
                            <MenuItem value="Glasgow">Glasgow</MenuItem>
                        </Select>
                    </FormControl >
                </Grid>
            </Grid>
        )
    }
}

export { Address };

