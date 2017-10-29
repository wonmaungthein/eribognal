import React from 'react';
import './Menu.css';
import { NavLink } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Themes from '../../Themes';

function Menu(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                            </IconButton>
                            <MenuIcon />
                            <Typography type="title" color="inherit" className={classes.flex}>
                                Food Mapping Erigbognal
                            </Typography>
                            <Button color="contrast"><NavLink to="/">Home </NavLink></Button>
                            <Button color="contrast"><NavLink to="/about">About</NavLink></Button>
                            <Button color="contrast"><NavLink to="/questionnaire">Questions</NavLink></Button>
                            <Button color="contrast"><NavLink to="/places">Places</NavLink></Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(Themes)(Menu);
