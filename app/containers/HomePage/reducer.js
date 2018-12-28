import { fromJS } from 'immutable';
import actionTypes from './constants';

const initialState = fromJS({
    expenseFormOpen: false,
    selectedCategory: '',
    categories: []
});

function homeReducer(state = initialState, action) {
	switch (action.type) {
        case actionTypes.OPEN_ADD_EXPENSE_FORM:             
            return state.set('expenseFormOpen', true)
                        .set('categories', [
                            {value: 'breakfast', label: 'Breakfast'},
                            {value: 'lunch', label: 'Lunch'},
                            {value: 'dinner', label: 'Dinner'}
                        ]);
        case actionTypes.CLOSE_EXPENSE_FORM:            
            return state.set('expenseFormOpen', false);
        case actionTypes.ADD_EXPENSE:
            return state.set('expenseFormOpen', false);
        case actionTypes.ADD_EXPENSE_SUCCESS:
            return state.set('expenseFormOpen', false);
        case actionTypes.ADD_EXPENSE_ERROR:
            return state.set('expenseFormOpen', false);
		default:
			return state;
	}
}

export default homeReducer;