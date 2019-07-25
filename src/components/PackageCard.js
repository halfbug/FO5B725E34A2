import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CheckMark from '@material-ui/icons/Done'
import OrderButton from './OrderButton'

const useStyles = makeStyles({
  card: {
    minWidth: '80%'
  },
  list: {
    fontSize: 27,
    lineHeight: 'normal'
  },
  title: {
    fontSize: 38,
    letterSpacing: -1
  },
  pos: {
    marginBottom: 12,
    fontSize: 52,
    textAlign: 'center'
  }
})

function generate (element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
}

export default function PackageCard () {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>

        <Typography variant='b' align='center' component='h2' className={classes.title}>
          Package A
        </Typography>
        <Typography className={classes.pos} >
          $297
        </Typography>

        <div >
          <List dense='true'>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <CheckMark />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component='h6'
                        variant='h5'

                        color='textPrimary'
                      >
                Feature
                      </Typography>

                    </React.Fragment>
                  }
                />
              </ListItem>
            )}
          </List>
        </div>

      </CardContent>
      <CardActions>
        <OrderButton width='100%'>
          <Typography variant='h6' className={classes.buttonMainTxt} >
         Start Your Order!
          </Typography>
          <Typography variant='body2' className={classes.buttonSubTxt} >
         Click here to get started
          </Typography>
        </OrderButton>
      </CardActions>
    </Card>
  )
}
