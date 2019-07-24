import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
  padding:theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    textAlign: 'left',

  },

        heading1: {
            padding:theme.spacing(1),
          textTransform: "capitalize", 
          lineHeight: "normal",
          fontSize: 40,
        },
        body1:{

            width:"100%",
            // textAlign:"center",
            // padding:theme.spacing(0,20,0,20),
        },
        body2:{

            width:"100%",
            textAlign:"left",
            padding:theme.spacing(0,20,0,20),
        },
        graybx:{
          backgroundColor: theme.palette.background.default,
          width: "85%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          padding:theme.spacing(2,4,2,4),
        },
        chip: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.background.default,
          fontSize:20,
        },
        whtbx : {
          width: "85%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          padding:theme.spacing(2,4,2,4),
        }
      }));
      
      
 

export default function Problem() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    <div className={classes.whtbx} >
      <Typography variant="b" component="h1"  className={classes.heading1} paragraph>
      Identify Their Problem
      </Typography>
     
      <Typography variant="body1" gutterBottom className={classes.body1} >
      It's important you know the problem your audience has.
       Sometimes they are unaware of the actual problem, and they think it's something else. 
       If that's the case you'll need to explain why that is the case. 
       Make sure the problem they think they have is the one you address first.      </Typography>
</div>
   {/* <div  className={classes.heroContent}> */}

<Box className={classes.graybx}>
       <Typography variant="b" component="h1" align="left" className={classes.heading1} paragraph>
       Agitate Their Problem      </Typography>

       <Typography variant="body1" gutterBottom className={classes.body1} >
       This is where you'll want to make them feel the consequences of not dealing with their problem. It should amplify how bad things would get if the problem went unfixed. <br/>
       </Typography>
       <Chip
        icon={<Icon>check_circle</Icon>}
        label="Bad consequence #1"
       // onClick={handleClick}
        //onDelete={handleDelete}
        className={classes.chip}
        //variant="outlined"
      /><br/>
      <Chip
        icon={<Icon>check_circle</Icon>}
        label="Bad consequence #2"
       // onClick={handleClick}
        //onDelete={handleDelete}
        className={classes.chip}
        //variant="outlined"
      />
     {/* Bad consequence #1 <br/>
    <Icon>check_circle</Icon> Bad consequence #2 <br/>
    <Icon>check_circle</Icon> Bad consequence #3 <br/>
    <Icon>check_circle</Icon> Bad consequence #4    */}
    
       </Box>
      {/* </div> */}

    </div>
  );
}
