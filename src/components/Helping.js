import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import ManImage from '../assets/images/banda.png'

const useStyles = makeStyles(theme => ({
  root: {
  padding:theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',

  },


        heading1: {
            padding:theme.spacing(3),
          textTransform: "capitalize", 
          lineHeight: "normal",
          fontSize: 40,
        },
        body1:{

          width:"85%",
          textAlign:"left",
          maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        },
        body2:{

            width:"100%",
            textAlign:"left",
            padding:theme.spacing(0,20,0,20),
        },
        fixheight:{
            maxHeight : 119,
            maxWidth : 120
        }
      }));
      
      
 

export default function Helping() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
      We're The Ones Helping You
      </Typography>   
      <Typography variant="body1" gutterBottom className={classes.body1} >
      if you can put some photos of your team here.
      </Typography>
      <Grid container spacing={4}  >
        <Grid item xs={3} spacing={3}><img width="100%" className={classes.fixheight} src={ManImage}  alt="" /></Grid>
        <Grid item xs={3} spacing={3}><img width="100%" className={classes.fixheight} src={ManImage}  alt="" /></Grid>
        <Grid item xs={3} spacing={3}><img width="100%" className={classes.fixheight} src={ManImage}  alt="" /></Grid>
        <Grid item xs={3} spacing={3}><img width="100%" className={classes.fixheight} src={ManImage}  alt="" /></Grid>
        </Grid>
      </div>
);
}