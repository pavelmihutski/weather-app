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

  render() {
    const { query } = this.state;
    const { fetchWeatherData } = this.props;

    return (
      <Paper className={classes.wrapper}>
        <div className={classes.inputContainer}>
          <Input
            onChange={e => this.handleChangeInput(e)}
            placeholder="Enter City and press &quot;Search&quot;"
            className={classes.button}
          />
        </div>

        <Button color="secondary" variant="contained" onClick={() => fetchWeatherData(query)}>
          Search
        </Button>
      </Paper>
    );
  }
}

Form.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired
};
