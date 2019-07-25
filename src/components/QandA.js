import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding : theme.spacing(2,1)
  },
  chip: {
    margin: theme.spacing(1),
    background : theme.palette.background.paper,

  },
  icon : {
      marginTop : 10
  }
}));

export default function Chips() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      
    <Typography variant="h6" gutterBottom>
    <HelpIcon className={classes.icon} />
        Put a Frequently Asked Question Here
        <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      </Typography>
      
      
      
    </div>
  );
}