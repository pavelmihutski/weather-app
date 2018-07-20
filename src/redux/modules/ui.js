import { createActions, handleActions } from 'redux-actions';

export const {
  uiShowLoader,
  uiHideLoader,

  uiShowSnackBar,
  uiHideSnackBar,

  uiShowModal,
  uiHideModal
} = createActions(
  'UI_SHOW_LOADER',
  'UI_HIDE_LOADER',

  'UI_SHOW_SNACK_BAR',
  'UI_HIDE_SNACK_BAR',

  'UI_SHOW_MODAL',
  'UI_HIDE_MODAL'
);

const defaultState = {
  snackBar: false,
  isModalOpen: false,
  modalCityId: 0,
  errorMessage: '',
  showingLoader: false
};

export default handleActions(
  {
    [uiShowLoader]: state => ({
      ...state,
      showingLoader: true
    }),
    [uiHideLoader]: state => ({
      ...state,
      showingLoader: false
    }),

    [uiShowSnackBar]: (state, { payload }) => ({
      ...state,
      errorMessage: payload,
      snackBar: true
    }),
    [uiHideSnackBar]: state => ({
      ...state,
      snackBar: false
    }),

    [uiShowModal]: (state, { payload }) => ({
      ...state,
      modalCityId: payload,
      isModalOpen: true
    }),
    [uiHideModal]: state => ({
      ...state,
      isModalOpen: false
    })
  },
  defaultState
);
