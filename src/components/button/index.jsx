import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

export default function ButtonUI({ children, ...selfProps }) {
  return <Button {...selfProps}>{children}</Button>;
}

ButtonUI.defaultProps = {
  children: ''
};

ButtonUI.propTypes = {
  children: PropTypes.node
};
