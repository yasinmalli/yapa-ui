import { fromJS } from 'immutable';

const initialState = fromJS({
	data: null	
});

function homeReducer(state = initialState, action) {
	switch (action.type) {		
		default:
			return state;
	}
}

export default homeReducer;