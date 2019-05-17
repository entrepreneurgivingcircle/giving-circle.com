import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwapIcon from '@material-ui/icons/SwapHorizontalCircle';
import PropTypes from 'prop-types';
import React from 'react';

import strings from '../strings';

const styles = ({ spacing }) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: spacing(2),
  },
});

function Header({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <SwapIcon className={classes.icon} />
          <Typography variant="h6" color="inherit">
            {strings.appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
