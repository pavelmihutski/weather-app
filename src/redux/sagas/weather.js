import { put, call, takeEvery } from 'redux-saga/effects';
import axios from '../../utils/axios';

import {
  weatherFetchData,
  weatherFetchDataFail,
  weatherFetchDataSuccess
} from '../modules/weather';

import { showLoader, hideLoader } from '../modules/ui';

export function* fetchData({ payload }) {
  yield put(showLoader());

  try {
    const response = yield call(axios.get, `weather?q=${payload}`);

    yield put(weatherFetchDataSuccess(response.data));

    yield put(hideLoader());
  } catch (err) {
    yield put(weatherFetchDataFail());

    yield put(hideLoader());
  }
}

export default function* weatherSaga() {
  yield takeEvery(weatherFetchData.toString(), fetchData);
}
