import React, { FC } from 'react';
import {HomeContainer, PlanetBtn} from "./Home.Styles";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Button} from "../../elements";
import {PATHS} from "../../const/paths.constants";
const HomeApp: FC = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <div className="home">
        <div className="home-title">
          <img
            alt="Vikita"
            className="home-title__img"
            src="/img/vikita.png"
          />
          <span className="home-title__text">Metaverse</span>
        </div>
        <div className="lab">
          <img
            alt="Vikita"
            className="lab-img"
            src="/img/tap.png"
          />
          <Button
            as={Link}
            className="lab-btn"
            to={PATHS.TAP}
          >
            Laboratory
          </Button>
        </div>
      </div>
      <div className="home-bottom">
        <div className="planet">
          <div className="planet-left">
            <div className="planet-description">
              <span className="planet-description__text">Awaken the power within you and save your world!</span>
              <PlanetBtn
                className="planet-description__btn"
                disabled={true}
              >
                Planet vikita
                <span className="soon">Soon</span>
              </PlanetBtn>
            </div>
          </div>
          <div className="planet-right">
            <img
              alt="Vikita"
              className="planet-img"
              src="/img/yoda.png"
            />
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomeApp;
