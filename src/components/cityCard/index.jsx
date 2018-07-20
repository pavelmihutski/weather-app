import React from 'react';

import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { fToC } from '../../utils/weatherConver';

import classes from './styles.css';

export default function cityCard({ city, index, deleteCity }) {
  const getWeahter = weather =>
    weather.map(i => (
      <div className={classes.weatherContainer} key={Date.now()}>
        <img
          src={`http://openweathermap.org/img/w/${i.icon}.png`}
          alt="weather"
          className={classes.img}
        />
        <Typography variant="body1">{i.description}</Typography>
      </div>
    ));

  console.log('render');

  return (
    <div className={classes.card}>
      <Paper className={classes.paper}>
        <DeleteForeverIcon className={classes.deleteIcon} onClick={() => deleteCity(index)} />

        <div>
          <Typography variant="headline" component="p">
            {city.name}, {city.sys.country}
            <img
              src={`http://openweathermap.org/images/flags/${city.sys.country.toLowerCase()}.png`}
              alt="weather"
              className={classes.icon}
            />
          </Typography>

          <Typography variant="body1" component="p">
            Geo cords [{city.coord.lon}, {city.coord.lat}]
          </Typography>

          <div className={classes.mainWeatherDataContainer}>
            <Typography variant="body2" component="p">
              <span className={classes.currTemp}>{fToC(city.main.temp)}</span>
            </Typography>

            <Typography variant="body2" component="p">
              Temperature from {fToC(city.main.temp_min)} to {fToC(city.main.temp_max)}, Clouds{' '}
              {city.clouds.all} %, Winds {city.wind.speed} m/s, {city.main.pressure} hpa
            </Typography>
          </div>
        </div>

        {getWeahter(city.weather)}
      </Paper>
    </div>
  );
}

cityCard.propTypes = {
  city: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  deleteCity: PropTypes.func.isRequired
};
