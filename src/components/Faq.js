import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import QandA from './QandA';


const useStyles = makeStyles(theme => ({
  root: {
  
    backgroundColor: theme.palette.background.paper,
    // textAlign: 'center',
    padding: theme.spacing(7,8,1,8),
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
      
      
 

export default function CaseStudy() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
    <Typography variant="h6" component="h1" align="center" className={classes.heading1} >
        Faq
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.body1} >
      Answer the most common questions. Again no one is going to buy from you with unanswered questions.
      </Typography>
    <Grid container spacing={1} >
        <Grid item xs={12} sm={6} >
        
       <QandA />
       <QandA />
          </Grid>
          <Grid item xs={12} sm={6} >
          <QandA />
          <QandA />
          </Grid>
    </Grid>
     
      
      
    </div>
  );
}
