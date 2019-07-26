import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RatingCard from './RatingCard';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    textAlign: 'center',
    padding: theme.spacing(7,6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading : {
    margin: theme.spacing(2),
    // display: "block"
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
padding:theme.spacing(1,0,3,0),
},
body2:{

    width:"100%",
    textAlign:"left",
    padding:theme.spacing(0,20,0,20),
}

}));

export default function Testimonial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography variant="h6" component="h1" align="center" className={classes.heading1} paragraph>
     Testimonials
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.body1} >
      The more you have the better. Testimonials that address common objections should get the most exposure as they will help convert.
      </Typography> 
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} >
        <RatingCard client="Name 1" />
        </Grid>
        
        <Grid item xs={12} sm={4} >
        <RatingCard client="Name 2" />
        </Grid>

        <Grid item xs={12} sm={4} >
        <RatingCard client="Name 3" />
        </Grid>

        

      </Grid>
    </div>
  );
}
