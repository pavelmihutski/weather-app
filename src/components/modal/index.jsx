import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import classes from './styles.css';

class Modal extends Component {
  static propTypes = {
    src: PropTypes.string,
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    src: '',
  };

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

  render() {
    const { src, close, isOpen } = this.props;

    return ReactDOM.createPortal(
      isOpen ? (
        <div className={classes.modal}>
          <div className={classes.close} onClick={close}>
            &times;
          </div>

          <img src={src} alt="breed" className={classes.image} />
        </div>
      ) : null,
      // eslint-disable-next-line comma-dangle
      this.container
    );
  }
}

export default Modal;
