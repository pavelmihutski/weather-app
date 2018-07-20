import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { weatherFetchData, weatherDeleteCity } from '../../redux/modules/weather';

import { uiShowModal, uiHideModal, uiHideSnackBar } from '../../redux/modules/ui';

import Form from './components/form';
import CitiesList from './components/cities-list';

import Preloader from '../../components/preloader';
import Notification from '../../components/notification';

import classes from './styles.css';

class Main extends Component {
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(location => {
      this.props.fetchData({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    });
  };

  render() {
    const {
      cities,
      snackBar,
      showModal,
      hideModal,
      deleteCity,
      modalCityId,
      isModalOpen,
      hideSnackBar,
      errorMessage,
      showingLoader,
      fetchData
    } = this.props;

    return (
      <Fragment>
        {showingLoader && <Preloader />}
        {snackBar && <Notification hideSnackBar={hideSnackBar} errorMessage={errorMessage} />}

        <div className={classes.wrapper}>
          <Form fetchData={fetchData} />

          <CitiesList
            cities={cities}
            showModal={showModal}
            hideModal={hideModal}
            deleteCity={deleteCity}
            isModalOpen={isModalOpen}
            modalCityId={modalCityId}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ ui, weather }) => ({
  modalCityId: ui.modalCityId,
  cities: weather.data,
  snackBar: ui.snackBar,
  isModalOpen: ui.isModalOpen,
  errorMessage: ui.errorMessage,
  showingLoader: ui.showingLoader
});

const mapDispatchToProps = dispatch => ({
  showModal: payload => dispatch(uiShowModal(payload)),
  hideModal: () => dispatch(uiHideModal()),
  fetchData: payload => dispatch(weatherFetchData(payload)),
  deleteCity: payload => dispatch(weatherDeleteCity(payload)),
  hideSnackBar: () => dispatch(uiHideSnackBar())
});

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.any).isRequired,
  snackBar: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  deleteCity: PropTypes.func.isRequired,
  modalCityId: PropTypes.shape(PropTypes.any).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  hideSnackBar: PropTypes.func.isRequired,
  showingLoader: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
