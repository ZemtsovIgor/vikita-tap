import types from '../actionTypes';

const CLICKER_CLICK = 'app/CLICKER_CLICK';
const CLICKER_RESTORE_ENERGY = 'app/CLICKER_REFILL';
const CLEAR = 'app/CLEAR';
const SET_LOADING = 'app/SET_LOADING';
const SET_ERROR = 'app/SET_ERROR';
const SET_ALERT = 'app/SET_ALERT';

type ClickerClickType = {
  type: typeof CLICKER_CLICK;
  payload?: null;
};

type ClickerRestoreEnergyType = {
  type: typeof CLICKER_RESTORE_ENERGY;
  payload?: null;
};

export type ClearRequest = {
  type: typeof CLEAR;
};

interface SetLoading {
  type: typeof types.SET_LOADING;
  key: string;
  status: boolean;
}
interface SetError {
  type: typeof types.SET_ERROR;
  key: string;
  message: null | string;
}

interface SetAlert {
  type: typeof types.SET_ALERT;
  message: string | null;
  messageType: string | null;
}

export type AppStoreActionTypes =
  | ClickerClickType
  | ClickerRestoreEnergyType
  | ClearRequest
  | SetLoading
  | SetError
  | SetAlert;

export default {
  CLICKER_CLICK,
  CLICKER_RESTORE_ENERGY,
  CLEAR,
  SET_LOADING,
  SET_ERROR,
  SET_ALERT,
} as const;
