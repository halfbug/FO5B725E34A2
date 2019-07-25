import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stars from './Stars'

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
    textAlign : "left"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RatingCard(props) {
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Stars />
        <Typography variant="h5" component="h2">
          {props.client}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Verified Purchase
        </Typography>
        <Typography variant="body2" component="p">
        Client testimonial here. If they can address a common objection that is great.
         
        </Typography>
      </CardContent>
      
    </Card>
  );
}