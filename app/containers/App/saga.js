
import { takeEvery } from 'redux-saga';
import ActionTypes from './constants';

export function * getEnvConfig () {
	
}

export default function * rootSaga() {
	yield [
		takeEvery(ActionTypes.GET_ENV_CONFIG, getEnvConfig)		
	];
}