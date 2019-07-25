import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Timmer from "./Timmer"
import Box from '@material-ui/core/Box';
import OrderButton from './OrderButton'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
    minHeight: "100vh",
    //backgroundImage: `url(https://images.clickfunnels.com/e6/8656303db411e69da91dabf47a1914/magmared.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color : "white",
    backgroundColor : '#E03F3C',

  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heading1: {
    textTransform: "capitalize", 
    lineHeight: "normal",
    fontSize: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },

  },
  tophead:{
    fontSize : 18,
  },
  clock:{
    display: "flex",
    justifyContent: "center",
  },
  videoWrapper :{
    width: "100%",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      paddingTop: "56.25% !important",
    },

    [theme.breakpoints.up('lg')]: {
      // width :"100%",                                                                                                                                                                                                                                        
      height: 380,
    },
    
},
  video : {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",                                                                                                                                  
    // width :560,
    // height: 315,
    
  },
  buttonMainTxt : {
    display: "block",
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      
      // height: "100%",
     },
  },
  buttonSubTxt:{
    display:"block",
    color: "gray",
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      
      // height: "100%",
     },
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
      <div className={classes.heroContent} >
          <Container maxWidth="lg" >
          <Grid container spacing={4} >
        <Grid item xs={12} spacing={3}>
        <Typography component="h4" variant="subtitle" align="center" className={classes.tophead}  gutterBottom>
        CALL OUT YOUR AUDIENCE HERE
            </Typography>
            <Typography component="h1" variant="b" align="center" className={classes.heading1}  paragraph>
            This is a template version of the website we've developed to sell 6-figures/year worth of 
            online services on autopilot. Put your headline here. 
            <a href="https://sumo.com/stories/headline-formulas" >Check this article for help</a>.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} align="center">
          <Box className={classes.clock} >
          <Timmer name="hour" /> <Timmer name="minute" /> <Timmer name="second" />
          </Box>
          <Typography variant="h6" gutterBottom>
          Talk about your attractive offer here.
      </Typography>

      <OrderButton>
      <Typography variant="h6" className={classes.buttonMainTxt} >
         Start Your Order!
      </Typography>      
       <Typography variant="body2" className={classes.buttonSubTxt}  >
         Click here to get started
      </Typography>
      </OrderButton>

        </Grid>
        <Grid item xs={12} sm={6} className={classes.videoWrapper}>
        <iframe  className={classes.video} title="promotional video"
        src="https://www.youtube.com/embed/dp3NK7TMMzw" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
        </Grid>
      </Grid>
        
          </Container>
    
    
    </div>
  );
}