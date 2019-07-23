import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  
    padding:theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',

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
      
      
 

export default function Results() {
  const classes = useStyles();

  return (
     
    <div  className={classes.root}>
      <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
      Show Results Of This Service
      </Typography>
      <Typography variant="body1" gutterBottom>
      Show proof that your service solves their problems.
      </Typography>
      
    </div>
  );
}
