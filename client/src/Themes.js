//Main color
import pink from 'material-ui/colors/pink';

const Themes = theme => ({
  root: {
    flexGrow: 1,
    'font': 'Roboto-Bold'
  },
  appBar: {
    background: pink[700]
  },
  radioTitle: {
    'font-size': 20,
    'padding-top': 5,
    'padding-left': 5,
    color: 'black',
    'font': 'Roboto-Bold'
  },
  appBarTitle: {
    'font-size': 20,
    flex: 1,
    color: 'white',
    'font': 'Roboto-Bold'
  },
  flex: {
    flex: 1,
  },
  defaultRadio: {
    'margin-left': 10,
    'font': 'Roboto-Regular'
  },
  checked: {
    color: pink[700],
    'margin-left': 10,
    'font': 'Roboto-Regular'
  },
});

export default Themes;
