import React, {useEffect} from 'react';
import { LoadingStyles } from './Loading.Styles';
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../../types/webSocketTypes.d";
import useWebSocket from "../../hooks/useWebSocket";

const Loading: React.FC = () => {
  const webSocket: WebSocketContextApi = useWebSocket();
  const {init, pizzaState, profile, getProfile} = webSocket;

  useEffect(() => {
    if (pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
      init();
    }

    if (pizzaState === PIZZA_STATUS_TYPES.USER_AUTHORIZED && !profile.uid) {
      getProfile();
    }
  }, [pizzaState]);

  return (
    <LoadingStyles>
      <div className="image">
        <span className="state">Loading....</span>
          {
            pizzaState !== PIZZA_STATUS_TYPES.USER_RECEIVED ? (
            <span className="state">{pizzaState}</span>
          ) : null
        }
      </div>
    </LoadingStyles>
  );
};

export default Loading;
