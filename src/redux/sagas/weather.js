import { put, call, takeEvery } from 'redux-saga/effects';

import axios from '../../helpers/axios';
import objectToParams from '../../helpers/objectToParams';

import {
  weatherFetchData,
  weatherFetchDataFail,
  weatherFetchDataSuccess
} from '../modules/weather';

import { uiShowLoader, uiHideLoader, uiShowSnackBar } from '../modules/ui';

export function* fetchData({ payload }) {
  yield put(uiShowLoader());

  try {
    const params = objectToParams(payload);
    const response = yield call(axios.get, `weather?${params}`);

    yield put(weatherFetchDataSuccess(response.data));

    yield put(uiHideLoader());
  } catch (err) {
    const error = err.response;
    const { status } = error;

    if (status === 400 || status === 404) {
      yield put(uiShowSnackBar(error.data.message));
    }

    yield put(weatherFetchDataFail());

    yield put(uiHideLoader());
  }
}

export default function* weatherSaga() {
  yield takeEvery(weatherFetchData.toString(), fetchData);
}
