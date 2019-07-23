import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Gurantee from './Gurantee.js';
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
          textTransform: "capitalize", 
          lineHeight: "normal",
          fontSize: 35,
        },
        body1:{

            width:"100%",
            textAlign:"left",
            padding:theme.spacing(0,20,0,20),
        },
        body2:{
            // paddingLeft:,
            width:"100%",
            textAlign:"left",
            // padding:theme.spacing(0,20,0,20),
        },
        step:{
            fontSize: 35,
            paddingLeft:'20vh',
            paddingRight:'20vh',
            paddingTop:'5vh',
            width:'150vh',



        }
      }));
      
      
 

export default function Process() {
  const classes = useStyles();

  return (
    <div>
     <div  className={classes.root}>
      <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
      Show The Process
      </Typography>   
          
      <Typography variant="body1" gutterBottom className={classes.body1} >
      Remember people will never buy from you if they have unanswered questions. Often times they've never bought the type of service that you're providing so explain to them exactly how the whole process works. This way they know exactly what to expect.   </Typography>

       </div>
      <div className={classes.step}>
     
      <Typography variant="b" component="h4" align="left" paragraph>
       <Icon>edit </Icon>  Step 1  </Typography>
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 1 of your process!   </Typography>
   </div>
<div className={classes.step}>
<Typography variant="b" component="h4" align="left" paragraph>
       <Icon>edit </Icon>  Step 2   </Typography>  
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 2 of your process!   </Typography >   
</div>

<div className={classes.step}>

       <Typography variant="b" component="h4" align="left"  paragraph>
       <Icon>edit </Icon>  Step 3 </Typography>  
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 3 of your process!   </Typography >   
</div>

<div className={classes.step}>

       <Typography variant="b" component="h4" align="left"  paragraph>
       <Icon>edit </Icon>  Step 4   </Typography>  
       <Typography variant="subtitle1" gutterBottom className={classes.body2} >
       Explain what happens in step 4 of your process!   </Typography >   
      </div>
      <Gurantee/>

      </div>
     
    

);
   


      
    
       
       
       
       


}
