
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

export function addExpense(expense) {
    return {
        type: ActionTypes.ADD_EXPENSE,
        expense
	};
}

export function addExpenseSuccess() {
    return {
        type: ActionTypes.ADD_EXPENSE_SUCCESS
	};
}

export function addExpenseError() {
    return {
        type: ActionTypes.ADD_EXPENSE_ERROR
	};
}


export default {
    openAddExpenseForm,
    closeExpenseForm,
    addExpense,
    addExpenseSuccess,
    addExpenseError
}