import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';

import Modal from '../../../../components/modal';
import CityCard from '../../../../components/city-card';

export default function CitiesList(props) {
  const { cities, hideModal, showModal, deleteCity, isModalOpen, modalCityId } = props;

  return (
    <div>
      {cities.map((i, index) => (
        <CityCard key={uuid()} city={i} index={index} showModal={showModal} />
      ))}

      <Modal
        hideModal={hideModal}
        deleteCity={() => deleteCity(modalCityId)}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  deleteCity: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  modalCityId: PropTypes.number.isRequired
};
