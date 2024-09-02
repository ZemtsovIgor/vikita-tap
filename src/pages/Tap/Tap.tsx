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
      <div className="home">
        <Header />
        <Balance>
          <img
            alt="Vikita"
            className="balance-img"
            src="/img/clicker.png"
          />
          <span className="balance">{points}</span>
        </Balance>
        <Banner />
        <Clicker/>
        <div className="home-bottom">
          <Energy>
            <img
              alt="Vikita"
              className="energy-img"
              src="/img/energy.png"
            />
            <span className="energy">{availableEnergy}/{energyThreshold}</span>
          </Energy>
        </div>
      </div>
      <Menu />
    </TapContainer>
  );
};

export default Tap;
