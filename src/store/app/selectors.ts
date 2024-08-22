import { AppStateType } from '../index';

export const selectLoadingByKey = (state: AppStateType, key: string): boolean =>
  !!state.app.loading[key];

export const selectErrorByKey = (state: AppStateType, key: string): null | string =>
  state.app.error[key] ? state.app.error[key] : null;
