import { fromJS } from 'immutable';
import actionTypes from './constants';

const initialState = fromJS({
    expenseFormOpen: false
});

function homeReducer(state = initialState, action) {
	switch (action.type) {
        case actionTypes.OPEN_ADD_EXPENSE_FORM:             
            return state.set('expenseFormOpen', true);
        case actionTypes.CLOSE_EXPENSE_FORM:            
            return state.set('expenseFormOpen', false);        
		default:
			return state;
	}
}

export default homeReducer;