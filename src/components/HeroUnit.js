import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    minHeight: "100vh",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heading1: {
    textTransform: "capitalize", 
    lineHeight: "normal",
    fontSize: 40,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <div className={classes.heroContent}>
          <Container maxWidth="md">
          <Grid container spacing={3}>
        <Grid item xs={12} spacing={3}>
        <Typography component="h4" variant="subtitle" align="center" color="textPrimary" gutterBottom>
        CALL OUT YOUR AUDIENCE HERE
            </Typography>
            <Typography component="h1" variant="b" align="center" className={classes.heading1} color="textSecondary" paragraph>
            This is a template version of the website we've developed to sell 6-figures/year worth of 
            online services on autopilot. Put your headline here. 
            <a href="https://sumo.com/stories/headline-formulas" >Check this article for help</a>.
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <iframe width="560" height="315"  title="promotional video"
        src="https://www.youtube.com/embed/dp3NK7TMMzw" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
        </Grid>
      </Grid>
        
          </Container>
    
    
    </div>
  );
}