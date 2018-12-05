
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors'
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectApp } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapStateToProps = createStructuredSelector({
	home: makeSelectHomePage(),
	app: makeSelectApp()
});

export function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
	withReducer,
	withSaga,
	withConnect
)(HomePage);
