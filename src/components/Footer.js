import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import HeroUnint from "./HeroUnit"
const useStyles = makeStyles(theme => ({
footer: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(6),
  },
}))


 
 
 export default function Footer(){
    const classes = useStyles();


     return(
 <footer className={classes.footer}>
 
 <Typography variant="subtitle2" align="center" gutterBottom>
 © 2012 - 2017, COMPANY NAME
 </Typography>
 <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
 Any other links you want here.
 </Typography>

</footer>
     )
{/* End footer */}
 }