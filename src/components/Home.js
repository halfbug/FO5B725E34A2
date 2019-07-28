import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HeroUnint from "./HeroUnit"


const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
  },
  
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  order:{
    margin: theme.spacing(0,4 )
  },
  appbar:{
    [theme.breakpoints.down('sm')]: {
      display: "none !important",
    },
  }
}));


export default function Home(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <HeroUnint />
      
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <CameraIcon edge="start" className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap className={classes.title}>
            Logo Here
          </Typography>
          <Button color="inherit">Scroll 1</Button> | <Button color="inherit">Scroll 2</Button> 
          <Button variant="contained" color="secondary" className={classes.order}>
        Order
      </Button>
        </Toolbar>
      </AppBar>

      
      <main>
        
        <Container  className={classes.root} maxWidth='xl'>
          {props.children}
        </Container>

      </main>
    </React.Fragment>
    
  );
}