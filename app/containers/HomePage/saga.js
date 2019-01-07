
import { takeEvery } from 'redux-saga';
import ActionTypes from './constants';
import apiClient from '../../apiClient';
import actions from './actions';
import { call, put, select } from 'redux-saga/effects';

export function * getExpenses() {
	try {		
		var expenses = yield call(apiClient, 'expense');		
		yield put(actions.getExpensesSuccess(expenses));
	}
	catch (ex) {
		yield put(actions.getExpensesError(ex));
	}
}

export default function * rootSaga() {
	yield [
		takeEvery(ActionTypes.GET_EXPENSES, getExpenses),
	];
}