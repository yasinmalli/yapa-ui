
import ActionTypes from './constants';

export function getMainCategories() {
    return {
        type: ActionTypes.GET_MAIN_CATEGORIES,
    };
}

export function getMainCategoriesSuccess(categories) {
  return {
      type: ActionTypes.GET_MAIN_CATEGORIES_SUCCESS,
      categories
  };
}

export function getMainCategoriesError(err) {
  return {
      type: ActionTypes.GET_MAIN_CATEGORIES_ERROR,
      err
  };
}

export function getSubCategories() {
    return {
        type: ActionTypes.GET_SUB_CATEGORIES,
    };
}

export function getSubCategoriesSuccess(categories) {
  return {
      type: ActionTypes.GET_SUB_CATEGORIES_SUCCESS,
      categories
  };
}

export function getSubCategoriesError(err) {
  return {
      type: ActionTypes.GET_SUB_CATEGORIES_ERROR,
      err
  };
}

export function selectMainCategory(category) {
    return {
        type: ActionTypes.SELECT_MAIN_CATEGORY,
        category
    };
}

export function selectSubCategory(category) {
    return {
        type: ActionTypes.SELECT_SUB_CATEGORY,
        category
    };
}

export function selectPrice(price) {
    return {
        type: ActionTypes.SELECT_PRICE,
        price
    };
}

export function selectExpenseType(expenseType) { return { type: ActionTypes.SELECT_EXPENSE_TYPE, expenseType }; }

export function setSpentAt(value) { return { type: ActionTypes.SET_SPENT_AT, value }; }

export function setDescription(value) { return { type: ActionTypes.SET_DESCRIPTION, value }; }

export function resetExpenseDialog() { return { type: ActionTypes.RESET_EXPENSE_DIALOG }; }

export function addExpense() {
    return {
        type: ActionTypes.ADD_EXPENSE
    }
}

export function addExpenseSuccess(expenseId) {
    return {
        type: ActionTypes.ADD_EXPENSE_SUCCESS,
        expenseId
    }
}

export function addExpenseError(err) {
    return {
        type: ActionTypes.ADD_EXPENSE_ERROR,
        err
    }
}

export default {
    getMainCategories,
    getMainCategoriesSuccess,
    getMainCategoriesError,
    getSubCategories,
    getSubCategoriesSuccess,
    getSubCategoriesError,
    selectMainCategory,
    selectSubCategory,
    selectPrice,
    selectExpenseType,
    setSpentAt,
    setDescription,
    addExpense,
    addExpenseSuccess,
    addExpenseError,
    resetExpenseDialog
}
