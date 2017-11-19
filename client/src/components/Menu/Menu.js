import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import Themes from '../../Themes';
import SvgIcon from 'material-ui/SvgIcon';
import {Link} from 'react-router-dom';


function Menu(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <AppBar className={classes.appBar} position="static" >
                        <Toolbar>
                            <Link style={{color: 'white', marginRight : 15, marginTop: 4}} to="/"><MenuIcon /></Link>
                            <Typography type="title" className={classes.appBarTitle}>
                              Food Map  
                            </Typography>
                            <SvgIcon fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                            </SvgIcon>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(Themes)(Menu);


