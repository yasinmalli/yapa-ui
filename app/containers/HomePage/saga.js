import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import actionTypes from './constants';
import actions from './actions';

export function * addExpense(action) {
	try {
		console.log(`category: ${action.expense.category} price: ${action.expense.price}`);
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