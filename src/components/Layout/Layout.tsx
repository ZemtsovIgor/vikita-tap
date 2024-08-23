import React, {useEffect, useRef} from 'react';

import {MainContainer, Content} from './Layout.Styles';
import {AppStateType} from "../../store";
import {connect} from "react-redux";
import {AppReducerState} from "../../store/app/reducers";
import {DEFAULT_BASE_ENERGY} from "../../const/app.constants";
import {clickerRestoreEnergy} from "../../store/app/actions";
import {WebApp} from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";
import {PIZZA_STATUS_TYPES} from "../../types/webSocketTypes.d";
import Loading from "../Loading";
import useStore from "../../hooks/useStore";
interface Props {
  children?: any;
  app: AppReducerState;
  clickerRestoreEnergy: () => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    children,
    app: { energy },
    clickerRestoreEnergy
  } = props;
  const timer = useRef<number>();
  const webApp: WebApp = useWebApp();
  const store = useStore();
  const { pizzaState } = store[0];

  if (!webApp.isExpanded) {
    webApp.expand();
  }

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    if (energy < DEFAULT_BASE_ENERGY) {
      timer.current = window.setTimeout(() => {
        clickerRestoreEnergy();
      }, 1000)
    }

    return () => {
      clearTimeout(timer.current)
    }
  }, [clickerRestoreEnergy, energy, timer])

  return pizzaState === PIZZA_STATUS_TYPES.WALLET_RECEIVED ? (
    <>
      <MainContainer>
        <Content className="content">
          {children}
        </Content>
      </MainContainer>
    </>
  ) : (
    <Loading />
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { app } = state;
  return {
    app,
  };
};
export default connect(mapStateToProps, {clickerRestoreEnergy})(Layout);
