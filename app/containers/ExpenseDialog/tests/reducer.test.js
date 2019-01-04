import { fromJS } from 'immutable';
import expenseDialogReducer from '../reducer';

describe('expenseDialogReducer', () => {
  it('returns the initial state', () => {
    expect(expenseDialogReducer(undefined, {})).toEqual(fromJS({}));
  });
});
