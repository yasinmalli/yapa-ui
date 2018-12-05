import { createSelector } from 'reselect';

const selectHomeDomain = (state) => state.get('home');

const makeSelectHomePage = () => createSelector(
	selectHomeDomain,
	(substate) => substate.toJS()
);

export default makeSelectHomePage;
