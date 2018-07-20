import React from 'react';

import TextField from '@material-ui/core/TextField';

export default function Input(props) {
  const { ...self } = props;

  return (
    <TextField
      id="city"
      label="City"
      InputLabelProps={{
        shrink: true
      }}
      fullWidth
      {...self}
    />
  );
}
