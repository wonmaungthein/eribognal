import React from 'react';
import ReactDOM from 'react-dom';
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
import { Address } from "../../components/Place/Address";
import Button from 'material-ui/Button';
import Geosuggest from 'react-geosuggest';
import './map.css';



import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';

const styles = ({
  root: {
	flexGrow: 1,
	padding: 10
  },
  paperX: {
	backgroundColor: '#ffeaea'
  },
  formStyle: {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	height: 350,
	width: 300,
  },
});


class AddPlaceForm extends React.Component {

  constructor(props) {
	super(props);
	this.state = {
	  places: [],
	  name: '',
	  address: {
		line1: '',
		line2: '',
		postcode: '',
		city: ''
	  },
	  description: '',
	  selectedCategory: "-1",
	  file: null,
	  error: undefined,
	  isLoading: false,
	  open: false,
	}
  }

  _handleSubmit = (event) => {
	event.preventDefault();
	apiClient.suggestPlaces({
	  name: this.state.name,
	  address:
		{
		  line1: this.state.address.line1,
		  line2: this.state.address.line2,
		  postcode: this.state.address.postcode,
		  city: this.state.address.city
		},
	  description: this.state.description,
	  category: this.state.selectedCategory,
	}, this.state.file)
	  .then((response) => {
		this.setState({
		  name: "",
		  address: {
			line1: "",
			line2: "",
			postcode: "",
			city: "",
		  },
		  description: "",
		  selectedCategory: "",
		  open: true,
		  error: undefined,
		})
		this.props.history.push("/places")
	  }
	  )
	  .catch((error) => {
		this.setState({
		  open: true,
		  error,
		})
	  })
  }

  handleRequestClosex = () => {
	this.setState({
	  open: false,
	  isLoading: false,
	});
  }

  handleRequestClose = () => {
	this.setState({
	  open: false,
	  isLoading: true,
	});
  }

  _handleChange = (event, field) => {
	const value = event.target.value;
	this.setState({
	  [field]: value
	})
  }
  _handleAddress = (event, field) => {
	const value = event.target.value;
	this.setState({
	  address: {
		...this.state.address,
		[field]: value
	  }
	})
  }
  onFileChange = (e) => {
	this.setState({ file: e.target.files[0] })
  }
  showError = () => {
	if (this.state.error !== undefined) {
	  return (
		<Dialog
		  open={this.state.open}
		  onRequestClose={this.handleRequestClosex}
		>
		  <DialogTitle>{"Error"}</DialogTitle>
		  <DialogContent>
			<DialogContentText>
			  An Error Has Happened, Please Make Sure That You have entered all the details
					 </DialogContentText>
		  </DialogContent>
		  <DialogActions>
			<Button onClick={this.handleRequestClosex} color="primary">
			  OK
			 </Button>
		  </DialogActions>
		</Dialog>
	  )
	}
  }


  onSuggestSelect = (suggest) => {
	console.log(suggest)
	if (!suggest) return;

	const { gmaps = {} } = suggest;
	const { address_components = [] } = gmaps;
	const postCodeData = address_components[5] || {};
	const cityData = address_components[1] || {};


	this.setState({
	  address: {
		line1: suggest.description || '',
		line2: gmaps.formatted_address || '',
		postcode: postCodeData.long_name || '',
		city: cityData.long_name || '',
	  }
	})
  }


  render() {
	const { classes } = this.props;
	const { fullScreen } = this.props;
	if (this.state.isLoading) {
	  return <Spinner />
	} else {
	  return (
		<div style={styles.root}>
		  <Grid container spacing={24} style={!this.state.error ? styles.paper : styles.paperX} >
			<Grid item xs={12}>
			  <h2>Suggest a New Place</h2>
			</Grid>
			<Grid item xs={12} md={6}>
			  <TextField
				required
				id="required"
				label="Name of the Place"
				value={this.state.name}
				onChange={(event) => this._handleChange(event, "name")}
				type="text"
				name="name"
				placeholder="Name of the Place" />
			</Grid>
			<Grid item xs={12} md={6}>
			  <TextField
				required
				id="required"
				label="Description"
				value={this.state.description}
				onChange={(event) => this._handleChange(event, "description")}
				type="text"
				name="description"
				placeholder="Description" />
			</Grid>
			<Grid item xs={12} md={6}>
			  <Geosuggest
				country="gb"
				onSuggestSelect={this.onSuggestSelect} />
			</Grid>
			<Grid item xs={12} md={6}>
			  <Address
				onChange={(event, field) => this._handleAddress(event, field)}
				address={this.state.address}
			  />
			</Grid>
			<Grid item xs={12} md={6}>
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
			</Grid>

			<Grid item xs={12} md={6}>
			  <input type="file" accept=".png,.jpg,.jpeg,.gif" onChange={this.onFileChange} />
			  <RaisedButton type="submit" value="Submit" onClick={this._handleSubmit}>
				Save </RaisedButton>
			  {this.showError()}
			</Grid>
		  </Grid>
		  <Dialog
			fullScreen={fullScreen}
			open={this.state.open}
			onRequestClose={this.handleRequestClose}
		  >

			<DialogTitle>{"Thank You"}</DialogTitle>
			<DialogContent>
			  <DialogContentText>
				You have Successfully submitted the form
			  </DialogContentText>
			</DialogContent>
			<DialogActions>
			  <Button onClick={this.handleRequestClose} color="primary">
				OK
				</Button>
			</DialogActions>
		  </Dialog>
		</div>
	  )
	}
  }
}


AddPlaceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPlaceForm);

