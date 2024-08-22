import { takeLatest } from 'redux-saga/effects';

import types from '../actionTypes';

function* clickerClick() {
}

export default function* appSagas() {
  yield takeLatest(types.CLICKER_CLICK, clickerClick);
}
