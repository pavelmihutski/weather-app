import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '../button';

import classes from './styles.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.rootSelector = document.getElementById('root-modal');
    this.container = document.createElement('div');
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  onSubmit = () => {
    this.props.deleteCity();
    this.props.hideModal();
  };

  render() {
    const { isModalOpen, hideModal } = this.props;

    return ReactDOM.createPortal(
      isModalOpen ? (
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography component="p" variant="headline">
              Are you sure ?
            </Typography>

            <div className={classes.btnContainer}>
              <Button color="secondary" variant="contained" onClick={hideModal}>
                Cancel
              </Button>

              <Button color="primary" variant="contained" onClick={this.onSubmit}>
                Submit
              </Button>
            </div>
          </Paper>
        </div>
      ) : null,
      this.container
    );
  }
}

Modal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  deleteCity: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired
};

export default Modal;
