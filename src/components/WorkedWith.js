import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    textAlign: 'center',
    padding: theme.spacing(7,3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading : {
    margin: theme.spacing(2),
    // display: "block"
  }
}));

export default function WorkedWith() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography variant="h6" className={classes.heading}>
          Some companies we have worked with
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
        <img width="100%" src="https://placehold.it/350x150/e1e5e6/6d7b8b?text=Demo+Image"  alt="" />
        <Typography variant="subtitle1" gutterBottom>
        Previous client logo
      </Typography>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
        <img width="100%" src="https://placehold.it/350x150/e1e5e6/6d7b8b?text=Demo+Image"  alt="" />
        <Typography variant="subtitle1" gutterBottom>
        Previous client logo
      </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <img width="100%" src="https://placehold.it/350x150/e1e5e6/6d7b8b?text=Demo+Image"  alt="" />
        <Typography variant="subtitle1" gutterBottom>
        Previous client logo
      </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <img width="100%" src="https://placehold.it/350x150/e1e5e6/6d7b8b?text=Demo+Image"  alt="" />
        <Typography variant="subtitle1" gutterBottom>
        Previous client logo
      </Typography>
        </Grid>


      </Grid>
    </div>
  );
}
