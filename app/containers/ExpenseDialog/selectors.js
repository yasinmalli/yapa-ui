import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectExpenseDialogDomain = state => state.get('expenseDialog', initialState);
const makeSelectExpenseDialog = () => createSelector(selectExpenseDialogDomain, substate => substate.toJS());

export default makeSelectExpenseDialog;
export { selectExpenseDialogDomain };
