/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

{/*import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}*/}



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

export class App extends React.PureComponent {
	constructor(props) {
		super(props);
		const self = this;
		props.getEnvConfig();		
	}
	render() {
		const content = (
			<Switch>				
				<Route path="/" render={() => <HomePage />} />				
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