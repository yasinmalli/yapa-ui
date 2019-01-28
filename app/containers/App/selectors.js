import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectConfig = (state) => state.get('global').get('config');

const makeSelectApp = () => createSelector(
    selectGlobal,
    globalState => globalState.toJS()
);

export {  
  makeSelectApp,
  selectConfig
};
