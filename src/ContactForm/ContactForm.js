import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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

function ContactForm(props) {
  const classes = useStyles();

  return (
    <form noValidate autoComplete='off'>
      <Container maxWidth='sm'>
        <h2>Contact Form</h2>
        <TextField
          className={classes.mt}
          id='contact-name'
          label='Name'
          fullWidth
        />
        <TextField
          type='email'
          className={classes.mt}
          id='contact-email'
          label='Email'
          fullWidth
        />
        <TextField
          className={classes.mt}
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
        >
          Submit
        </Button>
      </Container>
    </form>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
