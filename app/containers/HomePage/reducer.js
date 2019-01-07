import { fromJS } from 'immutable';
import actionTypes from './constants';
import moment from 'moment'

const initialState = fromJS({
    expenseFormOpen: false,
    expenses: []
});

function homeReducer(state = initialState, action) {
	switch (action.type) {
        case actionTypes.OPEN_ADD_EXPENSE_FORM:             
            return state.set('expenseFormOpen', true);
        case actionTypes.CLOSE_EXPENSE_FORM:            
            return state.set('expenseFormOpen', false);      
        case actionTypes.GET_EXPENSES_SUCCESS:
            let expenseItems = action.expenses.map(e => {                                           
                return [                     
                    moment(e.time).format('MMM DD, YYYY'),
                    e.spentAt + " ; " + e.description + " ; " + e.expenseType,
                    e.mainCategoryName + " ; " + e.subCategoryName,
                    `${e.price} CAD`
                ];
            });
            return state.set('expenses', expenseItems);
		default:
			return state;
	}
}

export default homeReducer;