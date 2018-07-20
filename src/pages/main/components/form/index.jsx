import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import Button from '../../../../components/button';
import Input from '../../../../components/input';

import classes from './styles.css';

export default class Form extends Component {
  state = {
    query: ''
  };

  handleChangeInput = e => this.setState({ query: e.target.value });

  handelSubmit = e => {
    e.preventDefault();
    this.props.fetchData({ q: this.state.query });
  };

  render() {
    return (
      <form noValidate onSubmit={this.handelSubmit} autoComplete="off">
        <Paper className={classes.wrapper}>
          <div className={classes.inputContainer}>
            <Input
              onChange={this.handleChangeInput}
              placeholder="Enter City and press &quot;Search&quot;"
              className={classes.button}
            />
          </div>

          <Button color="secondary" variant="contained" type="submit">
            Search
          </Button>
        </Paper>
      </form>
    );
  }
}

Form.propTypes = {
  fetchData: PropTypes.func.isRequired
};
