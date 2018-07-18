import { put, call, takeEvery } from 'redux-saga/effects';
import axios from '../../utils/axios';

import {
	weatherFetchData,
	weatherFetchDataFail,
	weatherFetchDataSuccess
} from '../modules/weather';

export function* fetchData() {
	try {
		const response = yield call(axios.get, 'weather?lat=53.786082&lon=27.911289');

		yield put(weatherFetchDataSuccess(response.data));
	} catch (err) {
		yield put(weatherFetchDataFail());
	}
}

export default function* dogsSaga() {
	yield takeEvery(weatherFetchData.toString(), fetchData);
}
