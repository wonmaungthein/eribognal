import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import apiClient from '../../helpers/apiClient';



const styles = {
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    textAlign: 'center',
  },
};

class AddPlaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      name: '',
      description: ''
    }
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    apiClient.suggestPlaces({
      name: this.state.name,
      description: this.state.description
    })
      .then(() => {
        this.setState({
          name: "",
          description: ""
        })
        this.props.history.push("/")
      })
  }

  _handleChange = (event, field) => {
    const value = event.target.value;
    this.setState({
      [field]: value
    })
  }
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Paper style={styles} zDepth={3} >
              <h2 className="card-heading">Suggest a New Place</h2>
              <form style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <TextField
                  value={this.state.name}
                  onChange={(event) => this._handleChange(event, "name")}
                  type="text"
                  name="name"
                  hintText='Name of the Place'
                  placeholder="Name of the Place"
                  floatingLabelText='Name of the Place' />
                <TextField
                  value={this.state.description}
                  onChange={(event) => this._handleChange(event, "description")}
                  type="text"
                  name="description"
                  hintText="Description"
                  multiLine={true}
                  placeholder="Description"
                  floatingLabelText="Description" />
                <RaisedButton type="submit" value="Submit" onClick={this._handleSubmit}>
                  Save
        </RaisedButton>
              </form>
            </Paper>
          </div>
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(AddPlaceForm);