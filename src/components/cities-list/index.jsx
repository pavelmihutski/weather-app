import React, { Component } from 'react';

import CityCard from '../cityCard';

export default class CitiesList extends Component {
  // shouldComponentUpdate = nextProps => {
  //   let test = false;
  //   if (nextProps.cities !== this.props.cities) {
  //     test = true;
  //   }
  //   return test;
  // };

  render() {
    const { cities, deleteCity } = this.props;
    console.log(this.props);
    return (
      <div>
        {cities.map((i, index) => (
          <CityCard city={i} index={index} deleteCity={deleteCity} key={Date.now()} />
        ))}
      </div>
    );
  }
}
