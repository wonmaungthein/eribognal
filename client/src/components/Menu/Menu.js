import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import Themes from '../../Themes';
import { Link } from 'react-router-dom';


function Menu(props) {
    const { classes } = props;
    return (
        <AppBar className={classes.appBar} position="static" >
            <Toolbar>
                <Link style={{ color: 'white', marginRight: 15, marginTop: 4 }} to="/"><MenuIcon /></Link>
                <Typography type="title" className={classes.appBarTitle}>
                    Food Map
                            </Typography>
                <Link to="/new-place"><svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
                </svg>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(Themes)(Menu);


