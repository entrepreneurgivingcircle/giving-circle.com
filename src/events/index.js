import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const styles = ({ spacing }) => ({
  cardGrid: {
    paddingTop: spacing(8),
    paddingBottom: spacing(8),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

function Events({ classes, events }) {
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4} justify="center">
        {events.map(event => (
          <Grid
            item
            key={event.id}
            xs={12}
            sm={6}
            md={events.length <= 2 ? 6 : 4}
          >
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={event.photo}
                title={event.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.title}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  {event.date}
                </Typography>
                <Typography>{event.content}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={event.link} target="_blank">
                  Mehr erfahren
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Events.defaultProps = {
  events: [
    {
      id: '1',
      title: 'Entrepreneur Giving Circle Meetup Aachen #2',
      date: 'Mon, 22.7.2019 - 19:00 @ DigiHub Aachen',
      link: 'http://meetu.ps/e/GN9x3/zy89Z/f',
      content:
        'Nach einer kurzen Vorstellungsrunde hat jeder 5 Minuten Zeit, um von seinen aktuellen Herausforderungen zu erzählen. Während diesen 5 Minuten kann sich der Rest der Gruppe melden und sagen wobei derjenige helfen kann.',
      photo:
        'https://secure.meetupstatic.com/photos/event/e/9/f/b/highres_481499899.jpeg',
    },
  ],
};

export default withStyles(styles)(Events);
