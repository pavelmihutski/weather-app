import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { weatherFetchData, weatherDeleteCity } from '../../redux/modules/weather';

import Form from './components/form';
import Preloader from '../../components/preloader';
import CityCard from '../../components/cityCard';

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
    const { cities, showingLoader, fetchWeatherData, deleteCity } = this.props;

    return (
      <Fragment>
        {showingLoader && <Preloader />}

        <div className={classes.wrapper}>
          <Form fetchWeatherData={fetchWeatherData} />

          {cities.map((i, index) => <CityCard city={i} deleteCity={deleteCity} index={index} />)}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ ui, weather }) => ({
  cities: weather.data,
  showingLoader: ui.showingLoader
});

const mapDispatchToProps = dispatch => ({
  deleteCity: payload => dispatch(weatherDeleteCity(payload)),
  fetchWeatherData: payload => dispatch(weatherFetchData(payload))
});

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteCity: PropTypes.func.isRequired,
  showingLoader: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
