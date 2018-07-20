import { createActions, handleActions } from 'redux-actions';

export const { showLoader, hideLoader, showSnackBar, hideSnackBar } = createActions(
  'SHOW_LOADER',
  'HIDE_LOADER',

  'SHOW_SNACK_BAR',
  'HIDE_SNACK_BAR'
);

const defaultState = {
  showingLoader: false,
  snackBar: false,
  errorMessage: ''
};

export default handleActions(
  {
    [showLoader]: state => ({
      ...state,
      showingLoader: true
    }),
    [hideLoader]: state => ({
      ...state,
      showingLoader: false
    }),

    [showSnackBar]: (state, { payload }) => ({
      ...state,
      errorMessage: payload,
      snackBar: true
    }),
    [hideSnackBar]: state => ({
      ...state,
      snackBar: false
    })
  },
  defaultState
);
