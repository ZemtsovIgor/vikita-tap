import { all, fork } from 'redux-saga/effects';

import appSagas from './app/sagas';

export default function* rootSaga() {
  yield all([
    fork(appSagas),
  ]);
}
