
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

export default {
    openAddExpenseForm,
    closeExpenseForm
}