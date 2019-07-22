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

            width:"100%",
            textAlign:"center",
            padding:theme.spacing(0,20,0,20),
        },
        body2:{

            width:"100%",
            textAlign:"left",
            padding:theme.spacing(0,20,0,20),
        }
      }));
      
      
 

export default function Problem() {
  const classes = useStyles();

  return (
      <div>
    <div  className={classes.root}>
      <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
      Identify Their Problem
      </Typography>
     
      <Typography variant="body1" gutterBottom className={classes.body1} >
      It's important you know the problem your audience has.
       Sometimes they are unaware of the actual problem, and they think it's something else. 
       If that's the case you'll need to explain why that is the case. 
       Make sure the problem they think they have is the one you address first.      </Typography>
</div>
   {/* <div  className={classes.heroContent}> */}
<main>
       <Typography variant="b" component="h1" align="center" className={classes.heading1} paragraph>
       Agitate Their Problem      </Typography>

       <Typography variant="body1" gutterBottom className={classes.body1} >
       This is where you'll want to make them feel the consequences of not dealing with their problem. It should amplify how bad things would get if the problem went unfixed. <br/>
       </Typography>
       <Typography variant="body1" className={classes.body2}  gutterBottom >
    <Icon>check_circle</Icon> Bad consequence #1 <br/>
    <Icon>check_circle</Icon> Bad consequence #2 <br/>
    <Icon>check_circle</Icon> Bad consequence #3 <br/>
    <Icon>check_circle</Icon> Bad consequence #4   
    
       </Typography>
       </main>
      {/* </div> */}

    </div>
  );
}
