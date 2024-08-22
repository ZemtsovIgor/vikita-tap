import appTypes, { AppStoreActionTypes } from './app/actionTypes';

const appActionTypes = {
  ...appTypes,
} as const;

export type AppActionTypes =
  | AppStoreActionTypes;

export default appActionTypes;
