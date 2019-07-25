
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {

  },
  countdownSection: {
    display: 'block',
    float: 'left',
    textAlign: 'center',
    borderRadius: 5,
    margin: 10
    // padding: theme.spacing(0,2),
    // width:70
  },
  count: {
    borderRadius: 100,
    width: 67,
    color: '#FFF',
    border: '4px solid #FFF',
    textAlign: 'center',
    fontSize: 27,
    padding: 10,
    marginBottom: 5
  }

}))

export default function Timmer (props) {
  const classes = useStyles()

  return (

    <Box className={classes.countdownSection}>
      <Box className={classes.count} >
                00
      </Box>
      <Typography variant='overline' display='block' gutterBottom>
        {props.name}
      </Typography>
    </Box>
  )
}
