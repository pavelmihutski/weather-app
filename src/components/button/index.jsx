import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './styles.css';

const Button = props => {
  const { onClick, children, className, ...rest } = props;

  return (
    <button {...rest} onClick={onClick} className={classnames(classes.button, className)}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
