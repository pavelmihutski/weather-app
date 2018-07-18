import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles.css';

const Input = props => {
  const { value, onChange } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={classes.input}
      placeholder="Start typing for filtering breeds..."
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
