import React, { FC } from 'react';
import Clicker from "../../components/Clicker/Clicker";
import {Balance, Energy, TapContainer} from "./Tap.Styles";
import {useTranslation} from "react-i18next";
import useWebSocket from "../../hooks/useWebSocket";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu/Menu";
const Tap: FC = () => {
  const { t } = useTranslation();
  const {
    wallet: {
      points,
      energyThreshold,
      availableEnergy
    }
  } = useWebSocket();

  return (
    <TapContainer>
      <div className="tap">
        <Header className="tap-header" />
        <div className="tap-content">
          <Balance balancelength={points.toString().length}>
            <img
              alt="Vikita"
              className="balance-img"
              src="/img/vikita.png"
            />
            <span className="balance">{points}</span>
          </Balance>
          <Clicker/>
          <div className="tap-bottom">
            <Energy>
              <img
                alt="Vikita"
                className="energy-img"
                src="/img/energy.png"
              />
              <span className="energy">{availableEnergy}/{energyThreshold}</span>
            </Energy>
          </div>
          <Menu />
        </div>
      </div>
    </TapContainer>
  );
};

export default Tap;
