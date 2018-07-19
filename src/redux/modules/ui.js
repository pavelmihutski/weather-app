import { createActions, handleActions } from 'redux-actions';

export const { showLoader, hideLoader } = createActions('SHOW_LOADER', 'HIDE_LOADER');

const defaultState = {
  showingLoader: false
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
    })
  },
  defaultState
);
