import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  
    padding:theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',

  },

  body1:{

    width:"85%",
    textAlign:"left",
    maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
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
      <Typography variant="h6" component="h1" align="center" className={classes.heading1} paragraph>
      Show Results Of This Service
      </Typography>
      <Typography variant="body1" gutterBottom>
      Show proof that your service solves their problems.
      </Typography>
      
    </div>
  );
}
