import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import TextField from '../Form/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  mt: {
    marginTop: '10px'
  },
  mt2: {
    marginTop: '20px'
  }
}));

function ContactForm({ submitting, handleSubmit, onSubmit }) {
  const classes = useStyles();

  const handleFormSubmit = data => {
    if (onSubmit) onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Container maxWidth='sm'>
        <h2>Contact Form</h2>
        <Field
          name='name'
          component={TextField}
          className={classes.mt}
          id='contact-name'
          label='Name'
          fullWidth
        />
        <Field
          name='email'
          component={TextField}
          type='email'
          className={classes.mt}
          id='contact-email'
          label='Email'
          fullWidth
        />
        <Field
          name='message'
          className={classes.mt}
          component={TextField}
          id='contact-message'
          label='Message'
          rowsMax='4'
          fullWidth
          multiline
        />
        <Button
          className={classes.mt2}
          variant='contained'
          color='primary'
          type='submit'
          disabled={submitting}
        >
          Submit
        </Button>
      </Container>
    </form>
  );
}

ContactForm.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

export default reduxForm({ form: 'contactForm' })(ContactForm);
