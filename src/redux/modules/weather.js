import { createActions, handleActions } from 'redux-actions';

export const {
  weatherFetchData,
  weatherFetchDataFail,
  weatherFetchDataSuccess,

  weatherDeleteCity
} = createActions(
  'WEATHER_FETCH_DATA',
  'WEATHER_FETCH_DATA_FAIL',
  'WEATHER_FETCH_DATA_SUCCESS',

  'WEATHER_DELETE_CITY'
);

const defaultState = {
  data: [],
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
      data: state.data.concat(payload),
      fetching: false
    }),

    [weatherDeleteCity]: (state, { payload }) => ({
      ...state,
      data: state.data.filter((item, index) => index !== payload)
    })
  },
  defaultState
);
