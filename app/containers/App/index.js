
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getEnvConfig } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectApp } from './selectors';
import HomePage from '../HomePage';
import ErrorPage from '../../components/ErrorPage'

export class App extends React.PureComponent {
	constructor(props) {
		super(props);		
		props.getEnvConfig();		
	}
	render() {
		const content = (
			<Switch>				
				<Route path="/" render={() => <HomePage />} />
				<Route path="/error" render={() => <ErrorPage />} />				
			</Switch>
		);
		return content;
	}
}

App.propTypes = {
	app: PropTypes.shape({		
		config: PropTypes.shape({
			base_url: PropTypes.string
		})
	}),
	getEnvConfig: PropTypes.func	
};

const mapStateToProps = createStructuredSelector({
	app: makeSelectApp()
});

export function mapDispatchToProps (dispatch) {
	return {
		getEnvConfig: () => {
			dispatch(getEnvConfig());
		}
	};
}

/* istanbul ignore next */

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
	withReducer,
	withSaga,
	withConnect,
)(App));