import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import apiClient from '../../helpers/apiClient';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import PropTypes from 'prop-types';
import Spinner from '../../components/Spinner/Spinner';
import { InputLabel } from 'material-ui/Input';

const styles = ({
  root: {
    flexGrow: 1,
  },
  layoutStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    textAlign: 'center',
    height: 300,
    width: 300,
    border: '2px solid gray',
  },
  paperX: {
    textAlign: 'center',
    width: 300,
    border: '2px solid #c12020',
    backgroundColor: '#ffeaea'
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
    width: 300,
  },
  formControl: {
    minWidth: 180,
    margin: 10
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 250,
    width: 300,
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


class AddPlaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      name: '',
      description: '',
      error: undefined,
      selectedCategory: "",
      isLoading: false
    }
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    apiClient.suggestPlaces({
      name: this.state.name,
      description: this.state.description,
      category: this.state.selectedCategory
    })
      .then((response) => {
        this.setState({
          name: "",
          description: "",
          selectedCategory: "",
          isLoading: true,
          error: undefined
        })
        alert('You Have Successfully Submited the form, Thank You')
        this.props.history.push("/new-place")
      }
      )
      .catch((error) => {
        this.setState({
          error
        })
      })
  }
  _handleChange = (event, field) => {
    const value = event.target.value;
    this.setState({
      [field]: value
    })
  }
  showError = () =>{
    if (this.state.error !== undefined) {
      return (<div style={styles.error}>An Error Has Happened</div>)
    }   
  }
  render() {
    const { classes } = this.props;
    if (this.state.isLoading) {
      return <Spinner />
    } else {
      return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <div style={styles.layoutStyle}>
              <Paper style={!this.state.error ? styles.paper : styles.paperX} >
                <h2 style={styles.titleStyle}>Suggest A New Place</h2>
                <form autoComplete="off" style={styles.formStyle}>
                  <TextField
                    required
                    id="required"
                    label="Required"
                    value={this.state.name}
                    onChange={(event) => this._handleChange(event, "name")}
                    type="text"
                    name="name"
                    placeholder="Name of the Place" />
                  <TextField
                    required
                    id="required"
                    label="Required"
                    value={this.state.description}
                    onChange={(event) => this._handleChange(event, "description")}
                    type="text"
                    name="description"
                    placeholder="Description" />
                  <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="Select Category">Select Category</InputLabel>
                    <Select style={styles}
                      value={this.state.selectedCategory}
                      onChange={(event) => this._handleChange(event, "selectedCategory")}>
                      <MenuItem value="Growing Project">Growing Project</MenuItem>
                      <MenuItem value="Night Out">Night Out</MenuItem>
                      <MenuItem value="Shopping">Shopping</MenuItem>
                      <MenuItem value="Eating Out">Eating Out</MenuItem>
                    </Select>
                  </FormControl>
                  <RaisedButton type="submit" value="Submit" onClick={this._handleSubmit}>
                    Save </RaisedButton>
                  {this.showError()}
                </form>
              </Paper>
            </div>
          </Grid>
        </Grid>
      )
    }
  }
}
AddPlaceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPlaceForm);