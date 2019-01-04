
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectExpenseDialog from './selectors';
import reducer from './reducer';
import saga from './saga';
import ExpenseDialog from './ExpenseDialog';

ExpenseDialog.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  expenseDialog: makeSelectExpenseDialog(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'expenseDialog', reducer });
const withSaga = injectSaga({ key: 'expenseDialog', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExpenseDialog);
