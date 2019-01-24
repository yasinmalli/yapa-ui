
import { takeEvery } from 'redux-saga';
import ActionTypes from './constants';
import { call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { getEnvConfigSuccess } from './actions';

export function * getEnvConfig () {
	try {		
		const response = yield call(request, 'config.json');
		yield put(getEnvConfigSuccess(response));
	} catch(err) {
		console.log(`asdasd ${err}`);
		yield call(navigateToErrorPage);
	}
}

export function * navigateToErrorPage() {
	yield put(replace(`/error`));
}

export default function * rootSaga() {
	yield [
		takeEvery(ActionTypes.GET_ENV_CONFIG, getEnvConfig),
		takeEvery(ActionTypes.NAVIGATE_TO_ERROR_PAGE, navigateToErrorPage)
	];
}