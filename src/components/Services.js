import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
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
          width:'100%',
          
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
        }
      }));
      
      
 

export default function Services() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <Typography variant="h6" component="h1" align="center" className={classes.heading1} >
      Now Introduce Your Service  
      </Typography>   
      <Typography variant="body1" gutterBottom className={classes.body1} >
      Show how your service solves their problems.
      </Typography>
      </div>
);
}