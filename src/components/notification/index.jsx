import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import classes from './styles.css';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.rootSelector = document.getElementById('root-notification');
    this.container = document.createElement('div');
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
    setTimeout(() => this.props.hideSnackBar(), 1500);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    const { errorMessage } = this.props;

    return ReactDOM.createPortal(
      <div className={classes.container}>
        <SnackbarContent
          message={errorMessage}
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={this.props.hideSnackBar}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>,
      this.container
    );
  }
}

Notification.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  hideSnackBar: PropTypes.func.isRequired
};

export default Notification;
