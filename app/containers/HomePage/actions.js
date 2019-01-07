
import ActionTypes from './constants';

export function openAddExpenseForm() {
	return {
        type: ActionTypes.OPEN_ADD_EXPENSE_FORM
	};
}

export function closeExpenseForm() {
	return {
        type: ActionTypes.CLOSE_EXPENSE_FORM
	};
}

export function getExpenses() { return { type: ActionTypes.GET_EXPENSES } }
export function getExpensesSuccess(expenses) { return { type: ActionTypes.GET_EXPENSES_SUCCESS, expenses } }
export function getExpensesError(err) { return { type: ActionTypes.GET_EXPENSES_ERROR, err } }

export default {
    openAddExpenseForm,
    closeExpenseForm,
    getExpenses,
    getExpensesSuccess,
    getExpensesError
}