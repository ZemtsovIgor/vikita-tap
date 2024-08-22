import types, { AppActionTypes } from '../actionTypes';
import {
  DEFAULT_BASE_ENERGY,
  DEFAULT_ENERGY_PER_TAP,
  DEFAULT_RESTORE_ENERGY_PER_SECOND,
  DEFAULT_SCORE_PER_TAP
} from "../../const/app.constants";

export type AppReducerState = {
  energy: number;
  score: number;
  loading: {
    [key: string]: boolean;
  };
  error: {
    [key: string]: string;
  };
  alert: {
    message: string | null;
    messageType: string | null;
  };
};

const INITIAL_STATE: AppReducerState = {
  energy: 100,
  score: 125,
  loading: {},
  error: {},
  alert: {
    message: null,
    messageType: null,
  },
};

const appReducers = (state = INITIAL_STATE, action: AppActionTypes): AppReducerState => {
  switch (action.type) {
    case types.CLICKER_CLICK:
      if (state.energy < DEFAULT_ENERGY_PER_TAP) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        energy: state.energy - DEFAULT_ENERGY_PER_TAP,
        score: state.score + DEFAULT_SCORE_PER_TAP,
      };
    case types.CLICKER_RESTORE_ENERGY:
      const newEnergy = state.energy + DEFAULT_RESTORE_ENERGY_PER_SECOND;
      return {
        ...state,
        energy: newEnergy > DEFAULT_BASE_ENERGY ? DEFAULT_BASE_ENERGY : newEnergy,
      };
    case types.SET_LOADING: {
      if (state.loading[action.key] && !action.status) {
        const newState = { ...state };
        delete newState.loading[action.key];
        return newState;
      }
      if (!state.loading[action.key] && action.status) {
        return {
          ...state,
          loading: { ...state.loading, [action.key]: action.status },
        };
      }
      return state;
    }
    case types.SET_ERROR: {
      if (state.error[action.key] && !action.message) {
        const newState = { ...state };
        delete newState.error[action.key];
        return newState;
      }
      if (action.message) {
        return {
          ...state,
          error: { ...state.error, [action.key]: action.message },
        };
      }
      return state;
    }
    case types.SET_ALERT: {
      return {
        ...state,
        alert: {
          message: action.message,
          messageType: action.messageType,
        },
      };
    }
    default:
      return state;
  }
};

export default appReducers;
