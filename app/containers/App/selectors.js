import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');
const selectGlobal = (state) => state.get('global');
const selectConfig = (state) => state.get('global').get('config');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectApp = () => createSelector(
    selectGlobal,
    globalState => globalState.toJS()
);

export { 
  makeSelectLocation ,
  makeSelectApp,
  selectConfig
};
