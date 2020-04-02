import React from 'react';
import MuiTextField from '@material-ui/core/TextField';

function TextField(props) {
  const {
    input: { value, onChange }
  } = props;

  return <MuiTextField {...props} value={value} onChange={onChange} />;
}

export default TextField;
