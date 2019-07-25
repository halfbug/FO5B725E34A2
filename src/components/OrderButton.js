import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Box } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    fontWeight: "bold",
    fontSize: 22,
    // color : theme.palette.color.secondary.main,
     [theme.breakpoints.down('xs')]: {
        width :"100%",
        
        // height: "100%",
       },
       
  },
  leftIcon: {
    marginRight: theme.spacing(1),
    fontSize: 22
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function OrderButton(props) {
  const classes = useStyles();
const width = (props.width)? {width:props.width}: {};
  return (
        
      <Button variant="contained" style={width}  className={classes.button} color="secondary" fullwidth>
          
        <ArrowForward className={clsx(classes.leftIcon, classes.iconSmall)} />
        <ArrowForward className={clsx(classes.leftIcon, classes.iconSmall)} />
        
        <Box> {props.children} </Box>
      </Button>
    
  );
}