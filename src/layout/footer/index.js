import { withStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

import strings from '../strings';

const styles = ({ palette, spacing }) => ({
  footer: {
    backgroundColor: palette.background.paper,
    padding: spacing(6),
  },
});

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Kreiert mit ❤️ von '}
      <Link color="inherit" href="https://nikolas-chapoupis.com/">
        Nikolas Chapoupis.
      </Link>
    </Typography>
  );
}

function Footer({ classes }) {
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        {strings.appTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {strings.footerQuote}
      </Typography>
      <MadeWithLove />
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
