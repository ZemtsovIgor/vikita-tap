import {FRIEND} from "./friends";

export type IState = {
  Points?: number;
  PointsHourlyRate?: number;
  Rank?: number;
  RankThreshold?: number;
  EnergyLevel?: number;
  TapThreshold?: number;
  TapLevel?: number;
  EnergyThreshold?: number;
  AvailableEnergy?: number;
  RefPointsToParent?: number;
  RefPointsToParentIfPremium?: number;
  RefPointsToInvitee?: number;
  PointsBonusHourlyRate?: number;
};

export type IClient = {
  uid: string | null;
  firstname?: string | null;
  lastname?: string | null;
  state?: IState;
};

export type WebSocketWallet = {
  points: number;
  pointsHourlyRate: number;
  rank: number;
  rankThreshold: number;
  energyLevel: number;
  tapThreshold: number;
  tapLevel: number;
  energyThreshold: number;
  availableEnergy: number;
  refPointsToParent: number;
  refPointsToParentIfPremium: number;
  refPointsToInvitee: number;
  pointsBonusHourlyRate: number;
};

export type WebSocketProfile = {
  uid: string | null;
  firstname: string;
  lastname: string;
  state?: WebSocketWallet;
};

export interface WebSocketPaginator {
  limit: number;
  offset?: number;
  total?: number;
  order?: number;
}

export enum PIZZA_STATUS_TYPES {
  NOT_LOADED = 'NOT_LOADED',
  INITIALIZING = 'INITIALIZING',
  WS_OPENED = 'WS_OPENED',
  WS_DISCONNECTED = 'WS_DISCONNECTED',
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  USER_RECEIVED  = 'USER_RECEIVED',
  FAILED_AUTHORIZATION = 'FAILED_AUTHORIZATION',
  WALLET_RECEIVED = 'WALLET_RECEIVED',
}
export interface WebSocketContextApi {
  pizzaState: PIZZA_STATUS_TYPES;
  setPizzaState: (payload: PIZZA_STATUS_TYPES) => void;
  wallet: WebSocketWallet;
  profile: WebSocketProfile;
  friends: { loaded: LOADING_TYPES; meta: WebSocketPaginator; list: FRIEND[]; }
  setWalletParams: (payload: WebSocketWallet) => void;
  init: () => void;
  sendTap: () => void;
  getInvitees: (payload: WebSocketPaginator) => void;
  getProfile: () => void;
}
