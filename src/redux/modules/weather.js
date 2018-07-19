import { createActions, handleActions } from 'redux-actions';

export const { weatherFetchData, weatherFetchDataFail, weatherFetchDataSuccess } = createActions(
  'WEATHER_FETCH_DATA',
  'WEATHER_FETCH_DATA_FAIL',
  'WEATHER_FETCH_DATA_SUCCESS'
);

const defaultState = {
  data: [],
  single: [],
  fetching: false
};

export default handleActions(
  {
    [weatherFetchData]: state => ({
      ...state,
      fetching: true
    }),
    [weatherFetchDataFail]: state => ({
      ...state,
      fetching: false
    }),
    [weatherFetchDataSuccess]: (state, { payload }) => ({
      ...state,
      single: payload,
      data: state.data.concat(payload),
      fetching: false
    })
  },
  defaultState
);
