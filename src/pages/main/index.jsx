import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { weatherFetchData } from '../../redux/modules/weather';

import Form from './components/form';
import Preloader from '../../components/preloader';

function Main(props) {
  const { fetchWeatherData, showingLoader } = props;

  return (
    <Fragment>
      {showingLoader && <Preloader />}

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Form fetchWeatherData={fetchWeatherData} />
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ ui }) => ({
  showingLoader: ui.showingLoader
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: payload => dispatch(weatherFetchData(payload))
});

Main.propTypes = {
  showingLoader: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
