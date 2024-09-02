import React from 'react';
import {HeaderContainer, ProgressLine} from "./Header.Styles";
import {WebApp} from "../../types/twa-types";
import useWebApp from "../../hooks/useWebApp";
import {WebSocketContextApi} from "../../types/webSocketTypes";
import useWebSocket from "../../hooks/useWebSocket";
import {API_URL} from "../../const/general.constants";
import {formatNumber} from "../../common/utils/formatters";

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({className}) => {
  const webApp: WebApp = useWebApp();
  const { initDataUnsafe: { user } } = webApp;
  const {profile, wallet}: WebSocketContextApi = useWebSocket();
  const {
    points,
    rank,
    rankThreshold,
  } = wallet;

   return (
    <HeaderContainer className={className}>
      <div className="header-left">
        <div className="user-info">
          <div className="user-info__avatar">
            <img
              className="user-info__avatar_img"
              src={profile.uid ? `${API_URL}/api/v1/a/clients/${profile.uid}/avatar?w=160&h=160` : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iI0EyQUNCMCIvPgo8L3N2Zz4K"}
              alt="mememiner"
            />
          </div>
          <span className="user-info__name">{user?.first_name} {user?.last_name}</span>
        </div>
      </div>
      <ProgressLine progress={(points / rankThreshold) * 100} pointslength={points.toString().length + rankThreshold.toString().length}>
        <div className="progressLine-container">
          <div className="progressLine-annotation">
            <span className="progressLine-annotation__name">Level</span>
            <span className="progressLine-annotation__name">{rank}/100</span>
          </div>
          <div className="progressLine-wrap">
            <div className="progressLine-line"/>
          </div>
        </div>
      </ProgressLine>
    </HeaderContainer>
  );
};

export default Header;
