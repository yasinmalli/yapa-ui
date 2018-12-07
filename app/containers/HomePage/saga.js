import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import actionTypes, { ADD_EXPENSE } from './constants';
import actions from './actions';

export function * addExpense() {
	try {
		console.log('Submit button clicked...');
		yield put(actions.addExpenseSuccess());
	} catch(e) {
		yield put(actions.addExpenseError(e));
	}
}

export default function * rootSaga() {
	yield [
		takeEvery(actionTypes.ADD_EXPENSE, addExpense),
	];
}