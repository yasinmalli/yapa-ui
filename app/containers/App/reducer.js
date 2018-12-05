
import { fromJS } from 'immutable';
import actionTypes from './constants';

// The initial state of the App
const initialState = fromJS({
	appContext: null,
	config: null
});

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_ENV_CONFIG_SUCCESS:
			return state.set('config', action.config);		
		default:
			return state;
	}
}
