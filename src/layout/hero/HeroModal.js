import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import React from 'react';

import strings from '../strings';

const inputs = [
  {
    autoComplete: 'given-name',
    label: 'Vorname',
    name: 'first-name',
    required: true,
  },
  {
    autoComplete: 'family-name',
    label: 'Nachname',
    name: 'last-name',
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    required: true,
    type: 'email',
  },
  {
    autoComplete: 'organization',
    label: 'Firma',
    name: 'company',
    required: true,
  },
  {
    label: 'Position',
    name: 'position',
    required: true,
  },
  {
    label: 'Anzahl der Angestellten',
    name: 'number-of-employees',
    required: true,
  },
  {
    autoComplete: 'address-level2',
    label: 'Stadt',
    name: 'city',
    required: true,
  },
  {
    label: 'LinkedIn Profil URL',
    name: 'linked-in',
    type: 'url',
    required: true,
  },
];

function HeroModal({ classes, onClick, open }) {
  return (
    <Dialog open={open} onClose={onClick} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{strings.appTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{strings.modalInstructions}</DialogContentText>
        <DialogContentText>{strings.rules}</DialogContentText>
        <Grid container spacing={2} direction="column" alignContent="center">
          <form
            className={classes.form}
            name="slack-request"
            method="post"
            onSubmit={onClick}
          >
            <input type="hidden" name="form-name" value="slack-request" />
            {inputs.map(({ type, name, ...rest }) => (
              <Grid className={classes.gridItem} item key={name}>
                <TextField
                  fullWidth
                  id={name}
                  name={name}
                  type={type || 'text'}
                  {...rest}
                />
              </Grid>
            ))}
            <Grid className={classes.gridItem} item>
              <Button color="primary" type="submit" variant="contained">
                Abschicken
              </Button>
            </Grid>
          </form>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

HeroModal.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const styles = theme => ({
  form: {
    width: '100%',
  },
  gridItem: {
    marginBottom: theme.spacing(2),
  },
});

export default withStyles(styles)(HeroModal);
