import { combineReducers } from 'redux';

import appReducer from './app/reducers';

const reducer = combineReducers({
  app: appReducer,
});

export default reducer;
