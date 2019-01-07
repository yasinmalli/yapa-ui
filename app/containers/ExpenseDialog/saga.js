import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import actionTypes from './constants';
import actions from './actions';
import apiClient from '../../apiClient';
import makeSelectExpenseDialog from './selectors';

export function * getMainCategories() {
    try {
      console.log('called');
        var mainCategories = yield call(apiClient, 'maincategory');        
        yield put(actions.getMainCategoriesSuccess(mainCategories));
    }
    catch (ex) {
      yield put(actions.getMainCategoriesError(ex));
    }
}

export function * getSubCategories() {
  try {
      const state = yield select(makeSelectExpenseDialog());
            
      var subCategories = yield call(apiClient, `maincategory/${state.mainCategory.selected}/subcategories`);
      yield put(actions.getSubCategoriesSuccess(subCategories));
  }
  catch (ex) {
      yield put(actions.getSubCategoriesError(ex));
  }
}

export function * addExpense() {
    try {        
        const state = yield select(makeSelectExpenseDialog());
        
        var expenseItem = {
            MainCategoryId: state.mainCategory.selected,
            SubCategoryId: state.subCategory.selected,
            Price: state.price,
            ExpenseType: state.expenseType,
            SpentAt: state.spentAt,
            Description: state.description
        };

        const options = {                        
            method: 'POST',
            body: JSON.stringify(expenseItem)            
        };
        console.log(JSON.stringify(expenseItem));
        let response = yield call(apiClient, 'expense', {}, options);

        yield put(actions.addExpenseSuccess(response.id));
    }
    catch (ex) {
        yield put(actions.addExpenseError(ex));
    }
}

export default function * rootSaga() {
    yield [
        takeEvery(actionTypes.GET_MAIN_CATEGORIES, getMainCategories),
        takeEvery(actionTypes.SELECT_MAIN_CATEGORY, getSubCategories),
        takeEvery(actionTypes.ADD_EXPENSE, addExpense)
    ];
}
