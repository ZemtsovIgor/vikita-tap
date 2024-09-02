import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import {PATHS} from "../../const/paths.constants";
import {MenuContainer} from "./Menu.Styles";
import { ReactComponent as HomeSVG } from "../../assets/images/home.svg";
import { ReactComponent as RefSVG } from "../../assets/images/ref.svg";
import { ReactComponent as EarnSVG } from "../../assets/images/earn.svg";


type Props = {
};

const Menu: React.FC<Props> = () => {
  const { pathname } = useLocation();

  return (
    <MenuContainer className="menu">
      <ul className="menu-list">
        <li className={`menu-list__item ${pathname === PATHS.TAP ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.TAP}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <HomeSVG/>
            </div>
            <span className="menu-list__text">Main</span>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.REF ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.REF}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <RefSVG/>
            </div>
            <span className="menu-list__text">Friends</span>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.EARN ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.EARN}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <EarnSVG/>
            </div>
            <span className="menu-list__text">Missions</span>
          </NavLink>
        </li>
        <li className={`menu-list__item ${pathname === PATHS.WAREHOUSE ? '-active' : ''}`}>
          <NavLink
            tabIndex={-1}
            to={PATHS.WAREHOUSE}
            className='menu-list__link'
          >
            <div className="menu-list__icon">
              <EarnSVG/>
            </div>
            <span className="menu-list__text">Warehouse</span>
          </NavLink>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
