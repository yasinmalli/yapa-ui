
import { fromJS } from 'immutable';
import actionTypes from './constants';

export const initialState = fromJS({
    status : false,
    mainCategory: {
      items: [],
      selected: ''
    },    
    subCategory: {
      items: [],
      selected: ''
    },
    price: 0,
    expenseType: '',
    spentAt: '',
    description: ''
});

function expenseDialogReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_MAIN_CATEGORIES_SUCCESS:      
        return state.setIn(['mainCategory', 'items'], fromJS(action.categories));
    case actionTypes.GET_SUB_CATEGORIES_SUCCESS:      
        return state.setIn(['subCategory', 'items'], fromJS(action.categories));
    case actionTypes.SELECT_MAIN_CATEGORY:
        return state.setIn(['mainCategory', 'selected'], action.category);
    case actionTypes.SELECT_SUB_CATEGORY:
        return state.setIn(['subCategory', 'selected'], action.category);
    case actionTypes.SELECT_PRICE:
        return state.set('price', action.price);
    case actionTypes.SELECT_EXPENSE_TYPE:
        return state.set('expenseType', action.expenseType);
    case actionTypes.SET_SPENT_AT:
      return state.set('spentAt', action.value);
    case actionTypes.SET_DESCRIPTION:
      return state.set('description', action.value);
    default:
        return state;
  }
}

export default expenseDialogReducer;
