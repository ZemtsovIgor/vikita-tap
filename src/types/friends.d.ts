import {WebSocketWallet} from "./webSocketTypes";

export interface FRIEND {
  uid: string | null;
  firstname?: string | null;
  lastname?: string | null;
  state: WebSocketWallet | null;
}

