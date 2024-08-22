import React, {FC, useEffect, useState} from 'react'
import {DEFAULT_PIZZA, PizzaContext, WebSocketContext} from "../contexts/webSocketContext";
import {
  IClient,
  PIZZA_STATUS_TYPES,
  WebSocketPaginator,
  WebSocketProfile,
  WebSocketWallet
} from "../types/webSocketTypes.d";
import {API_URL, K_ID, K_PRIVATE, K_PUBLIC, WS_API_URL, WS_URL} from "../const/general.constants";
import {DEFAULT_FRIENDS_LOADING_LIMIT, DEFAULT_RESTORE_ENERGY_PER_SECOND} from "../const/app.constants";
import {LOADING_TYPES} from "../types/app.d";
import {FRIEND} from "../types/friends.d";
import {clientStateToProfileState} from "../common/utils/formatters";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: FC<Props> = ({ children }: Props) => {
  const [timer, setTimer] = useState<number>(0);
  // @ts-ignore
  const webApp = window.Telegram?.WebApp;
  const [profile, setProfile] = useState<WebSocketProfile>({
    uid: null,
    firstname: '',
    lastname: ''
  })
  const [wallet, setWallet] = useState<WebSocketWallet>({
    points: 0,
    pointsHourlyRate: 0,
    rank: 0,
    rankThreshold: 100000,
    energyLevel: 1,
    tapThreshold: 1,
    tapLevel: 0,
    energyThreshold: 0,
    availableEnergy: 0,
    refPointsToParent: 0,
    refPointsToParentIfPremium: 0,
    refPointsToInvitee: 0,
    pointsBonusHourlyRate: 0
  });
  const [pizzaState, setPizzaState] = useState<PIZZA_STATUS_TYPES>(PIZZA_STATUS_TYPES.NOT_LOADED);
  const [friends, setFriends] = useState<{
    loaded: LOADING_TYPES;
    meta: WebSocketPaginator;
    list: FRIEND[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    meta: {
      limit: DEFAULT_FRIENDS_LOADING_LIMIT
    },
    list: []
  })

  const init = () => {
    if (DEFAULT_PIZZA) {
      setPizzaState(PIZZA_STATUS_TYPES.INITIALIZING);
      if (!DEFAULT_PIZZA.Initialized && pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
        DEFAULT_PIZZA.Init({
          wsURL: WS_URL,
          apiURL: API_URL,
          wsapiURL: WS_API_URL,
          kID: K_ID,
          kPublic: K_PUBLIC,
          kPrivate: K_PRIVATE,
          onWSOpen: onWSOpenCallback,
          onWSClose: onWSCloseCallback,
        });
      }
    }
  }

  const onWSOpenCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_OPENED);
    auth();
  }

  const onWSCloseCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_DISCONNECTED);
  }

  const getProfile = () => {
    DEFAULT_PIZZA.WSMe((envelope, message) => {
      setProfile({
        uid: message.client?.uid || null,
        firstname: message.client?.firstname || '',
        lastname: message.client?.lastname || ''
      })
    });
  }

  const getInvitees = (paginator: WebSocketPaginator) => {
    setFriends(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSInvitees(paginator, (envelope, message) => {
      const newFriends: FRIEND[] = message.clients?.map((client: IClient) => {
        return {
          uid: client.uid || null,
          firstname: client.firstname || '',
          lastname: client.lastname || '',
          state: clientStateToProfileState(client.state)
        }
      }) || [];
      setFriends(prev => ({
        loaded: LOADING_TYPES.LOADED,
        meta: message.meta || {limit: DEFAULT_FRIENDS_LOADING_LIMIT},
        list: [...prev.list, ...newFriends]
      }));
    });
  }

  const sendTap = () => {
    const newPoints = wallet.points + 1;

    setWallet(prev => ({
      ...prev,
      points: prev.points + prev.tapThreshold,
      availableEnergy: prev.availableEnergy - prev.tapThreshold,
    }));

    if (newPoints >= wallet.rankThreshold) {
      getState();
    }

    DEFAULT_PIZZA.WSTap();
  }

  const auth = () => {
    if (!webApp.initDataUnsafe || !webApp.initData) return;
    try {
      DEFAULT_PIZZA.WSAuth({
        provider: "tg",
        username: String(webApp.initDataUnsafe.user.id),
        password: String(webApp.initData),
      }, (envelope, message) => {
        if (message.client) {
          setPizzaState(PIZZA_STATUS_TYPES.USER_AUTHORIZED);
          getState();
        } else {
          setPizzaState(PIZZA_STATUS_TYPES.FAILED_AUTHORIZATION);
        }
      });
    } catch (e) {
      console.log('WSAuth error', e);
    }
  }

  const getState = () => {
    DEFAULT_PIZZA.WSState();
  }

  const setWalletParams = (params: WebSocketWallet) => {
    setPizzaState(PIZZA_STATUS_TYPES.WALLET_RECEIVED);
    setWallet(prev => ({
      ...prev,
      points: params.points,
      pointsHourlyRate: params.pointsHourlyRate,
      rank: params.rank,
      rankThreshold: params.rankThreshold,
      energyLevel: params.energyLevel,
      tapThreshold: params.tapThreshold,
      tapLevel: params.tapLevel,
      energyThreshold: params.energyThreshold,
      availableEnergy: !params.availableEnergy && !prev.availableEnergy ? params.energyThreshold : prev.availableEnergy,
      refPointsToParent: params.refPointsToParent,
      refPointsToParentIfPremium: params.refPointsToParentIfPremium,
      refPointsToInvitee: params.refPointsToInvitee,
      pointsBonusHourlyRate: params.pointsBonusHourlyRate
    }));
  }

  useEffect(() => {
    const s = timer + wallet.tapThreshold;

    if (s >= 10) {
      setTimer(0);
      getState();
      return () => {};
    }

    const intervalId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTimer(s);
      setWallet(prev => ({
        ...prev,
        availableEnergy: prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND <= prev.energyThreshold ? prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND : prev.energyThreshold ,
      }));
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [timer]);

  return (
    <WebSocketContext.Provider
      value={{
        pizzaState,
        profile,
        wallet,
        friends,
        init,
        setPizzaState,
        setWalletParams,
        sendTap,
        getInvitees,
        getProfile
      }}
    >
      <PizzaContext.Provider value={DEFAULT_PIZZA}>
        {children}
      </PizzaContext.Provider>
    </WebSocketContext.Provider>
)
}
