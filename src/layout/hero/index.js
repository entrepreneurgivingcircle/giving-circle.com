import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import strings from '../strings';
import HeroModal from './HeroModal';

const styles = ({ palette, spacing }) => ({
  heroButtons: {
    marginTop: spacing(4),
  },
  heroContent: {
    backgroundColor: palette.background.paper,
    padding: spacing(8, 0, 6),
  },
});

function Hero({ classes }) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {strings.appTitle}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {strings.heroContent}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                {strings.callToAction}
              </Button>
            </Grid>
          </Grid>
        </div>
        <HeroModal open={open} onClick={handleClose} />
      </Container>
    </div>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
