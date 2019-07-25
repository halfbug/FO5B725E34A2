import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Gurantee from './Gurantee.js';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
  // padding:theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    
  },




      
        body1:{
          textAlign : "left",
          width:"85%",    
    paddingBottom:theme.spacing(4),
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
         
        },
        body2:{
            // paddingLeft:,
            width:"100%",
            textAlign:"left",
            // padding:theme.spacing(0,20,0,20),
        },
        step:{
            fontSize: 35,
            width:"85%",
        //textAlign:"left",
        maxWidth: "100%",
      marginLeft: "auto",
      marginRight: "auto",
          background: theme.palette.background.default,
          marginBottom:theme.spacing(5)

        },
        heading1: {
          // padding:theme.spacing(4),
        textTransform: "capitalize", 
        lineHeight: "normal",
        fontSize: 40,
        width:"85%",    
    //padding: theme.spacing(7,8,1,8),
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
       

      },
      largeicon :{
        fontSize : 48,
        padding: 5
      },
      icon:{
        textAlign: "center",
        verticalAlign : "center"
      }
      }));
      
      
 

export default function Process() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <div  >
      <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
      Show The Process
      </Typography>   
          
      <Typography variant="body1" gutterBottom className={classes.body1} >
      Remember people will never buy from you if they have unanswered questions. Often times they've never bought the type of service that you're providing so explain to them exactly how the whole process works. This way they know exactly what to expect.   </Typography>

       </div>
       

<div className={classes.step} >
<Grid container spacing={4} >
        <Grid item xs={12} sm={2} spacing={3} className={classes.icon}>
        <Icon className={classes.largeicon}>edit </Icon>
          </Grid>
          <Grid item xs={12} sm={9} spacing={3}>
          <Typography variant="b" component="h4" align="left" pararaph>
        Step 1  </Typography>
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 1 of your process!   </Typography>
          </Grid>  
          </Grid>
</div>

<div className={classes.step} >
<Grid container spacing={4} >
        <Grid item xs={12} sm={2} spacing={3} className={classes.icon}>
        <Icon className={classes.largeicon}>edit </Icon>
          </Grid>
          <Grid item xs={12} sm={9} spacing={3}>
          <Typography variant="b" component="h4" align="left" pararaph>
        Step 2  </Typography>
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 1 of your process!   </Typography>
          </Grid>  
          </Grid>
</div>

<div className={classes.step} >
<Grid container spacing={4} >
        <Grid item xs={12} sm={2} spacing={3} className={classes.icon}>
        <Icon className={classes.largeicon}>edit </Icon>
          </Grid>
          <Grid item xs={12} sm={9} spacing={3}>
          <Typography variant="b" component="h4" align="left" pararaph>
        Step 3  </Typography>
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 1 of your process!   </Typography>
          </Grid>  
          </Grid>
</div>

<div className={classes.step} >
<Grid container spacing={4} >
        <Grid item xs={12} sm={2} spacing={3} className={classes.icon}>
        <Icon className={classes.largeicon}>edit </Icon>
          </Grid>
          <Grid item xs={12} sm={9} spacing={3}>
          <Typography variant="b" component="h4" align="left" pararaph>
        Step 4  </Typography>
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 1 of your process!   </Typography>
          </Grid>  
          </Grid>
</div>
<br/>
      </div>
     
    

);
   


      
    
       
       
       
       


}
