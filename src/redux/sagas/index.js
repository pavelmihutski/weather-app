import { fork } from 'redux-saga/effects';

import weather from './weather';

export default function* rootSaga() {
	yield fork(weather);
}
