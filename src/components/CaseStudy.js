import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CaseStudyimg from '../assets/images/casestudy.jpg'

const useStyles = makeStyles(theme => ({
  root: {
  
    backgroundColor: theme.palette.background.paper,
    // textAlign: 'center',
    padding: theme.spacing(7,3,1,3),
  },
       
      }));
      
      
 

export default function CaseStudy() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
    <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
        Case Study (Doesn't have to be yours)
      </Typography>
    <Grid container spacing={1} >
        <Grid item xs={12} sm={6} >
        <img width="100%" src={CaseStudyimg}  alt="" />
       
          </Grid>
          <Grid item xs={12} sm={6} >
          <Typography variant="h6" component="subtitle1" align='left' >
      
      Describe the results of the case study. You want visitors to think "this could happen to me too!"      
      </Typography>
          </Grid>
    </Grid>
     
      
      
    </div>
  );
}
