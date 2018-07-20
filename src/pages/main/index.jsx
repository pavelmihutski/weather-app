import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideSnackBar as hideSnackBarAction } from '../../redux/modules/ui';
import { weatherFetchData, weatherDeleteCity } from '../../redux/modules/weather';

import Form from './components/form';
import CitiesList from '../../components/cities-list';
import Preloader from '../../components/preloader';
import Notification from '../../components/notification';

import classes from './styles.css';

class Main extends Component {
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(location => {
      this.props.fetchWeatherData({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    });
  };

  render() {
    const {
      cities,
      snackBar,
      deleteCity,
      hideSnackBar,
      errorMessage,
      showingLoader,
      fetchWeatherData
    } = this.props;

    return (
      <Fragment>
        {showingLoader && <Preloader />}
        {snackBar && <Notification hideSnackBar={hideSnackBar} errorMessage={errorMessage} />}

        <div className={classes.wrapper}>
          <Form fetchWeatherData={fetchWeatherData} />

          <CitiesList cities={cities} deleteCity={deleteCity} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ ui, weather }) => ({
  cities: weather.data,
  snackBar: ui.snackBar,
  errorMessage: ui.errorMessage,
  showingLoader: ui.showingLoader
});

const mapDispatchToProps = dispatch => ({
  deleteCity: payload => dispatch(weatherDeleteCity(payload)),
  hideSnackBar: () => dispatch(hideSnackBarAction()),
  fetchWeatherData: payload => dispatch(weatherFetchData(payload))
});

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
  snackBar: PropTypes.bool.isRequired,
  deleteCity: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  hideSnackBar: PropTypes.func.isRequired,
  showingLoader: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
