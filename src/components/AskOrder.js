import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PackageCard from './PackageCard'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {

    backgroundColor: theme.palette.primary.main,
    // textAlign: 'center',
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(7, 8, 1, 8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(7, 1, 1, 1)
    }
  },
  body1: {
    textAlign: 'left',
    width: '85%',
    paddingBottom: theme.spacing(4),
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }

  },
  heading2: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 27
  }

}))

export default function AskOrder () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='b' component='h1' align='center' className={classes.heading1} paragraph>
    Ask For Their Order
      </Typography>
      <Grid container spacing={3} className={classes.body1} >
        <Grid item xs={12} sm={6} >
          <PackageCard />
        </Grid>
        <Grid item xs={12} sm={6} >
          <PackageCard />
        </Grid>
      </Grid>
      <Box >
        <Typography variant='b' component='h5' align='center' paragraph className={classes.heading2}>
   THIS IS CRUCIAL! Give out a 10% discount for bulk orders of 3+ (if possible). This had a huge impact on our business.
          <Typography variant='body2' gutterBottom>
   Elaborate on the bulk offer.
          </Typography>
        </Typography>
      </Box>
    </div>
  )
}
