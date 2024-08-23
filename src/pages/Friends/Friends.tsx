import React, {FC, useEffect, useRef} from 'react';
import {Button, Loader} from "../../elements";
import {
  FriendsWrap,
} from "./Friends.Styles";
import {nFormatter} from "../../common/utils/formatters";
import { ReactComponent as CopySVG } from "../../assets/images/copy.svg";
import {FRIEND} from "../../types/friends.d";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {API_URL, BOT_URL} from "../../const/general.constants";
import useWebSocket from "../../hooks/useWebSocket";
import {LOADING_TYPES} from "../../types/app.d";
import {DEFAULT_FRIENDS_LOADING_LIMIT} from "../../const/app.constants";
import {WebSocketPaginator} from "../../types/webSocketTypes";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header";

interface Props {
}

const Friends: FC<Props> = () => {
  const { t } = useTranslation();
  const {
    profile: {
      uid
    },
    friends,
    getInvitees
  } = useWebSocket();
  const listContainer = useRef(null);

  useEffect(() => {
    if (friends.loaded === LOADING_TYPES.NOT_LOADED) {
      getInvitees({limit: DEFAULT_FRIENDS_LOADING_LIMIT});
    }
  }, [friends.loaded]);

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  };

  const handleScroll = () => {
    if ((friends.meta.total || 0) <= friends.list.length) {
      return false;
    }
    if (listContainer.current) {
      const { scrollTop, scrollHeight, clientHeight } = listContainer.current;
      if ((scrollTop + 1) > (scrollHeight - clientHeight)) {
        getFriends()
      }
    }
  };

  const getFriends = () => {
    const newPagination: WebSocketPaginator = {
      limit: friends.meta.limit || DEFAULT_FRIENDS_LOADING_LIMIT,
      offset: friends.meta.offset || 0,
    };
    // @ts-ignore
    newPagination.offset += newPagination.limit;
    getInvitees(newPagination);
  };

  return (
    <FriendsWrap>
      <div className="friends-wrapper">
        <Header/>
        <div className="friends-actions">
          <Button
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?start=${uid}&text=${t('share.text')}`}
            className="friends-actions__btn"
          >
            Invite a friend
          </Button>
          <Button
            className="friends-actions__btn -copy"
            type="button"
            onClick={() => handleCopy(`${BOT_URL}?start=${uid}`)}
          >
            <div className="friends-actions__btn_icon">
              <CopySVG/>
            </div>
          </Button>
        </div>
        <div className="friends-list">
          <div className="friends-list__description">
            <span className="friends-list__description_title">My friends ({friends.meta.total || 0})</span>
          </div>
          <div
            ref={listContainer}
            className="friends-list__wrap"
            onScroll={handleScroll}
          >
            {
              friends.list.map((friend: FRIEND, index: number) => (
                <div
                  key={`friend-${index}`}
                  className="friends-friend"
                >
                  <div className="friends-friend__avatar">
                    {
                      friend.uid ? (
                        <img
                          alt=""
                          className="friends-friend__avatar_img"
                          src={`${API_URL}/api/v1/a/clients/${friend.uid}/avatar?w=160&h=160`}
                        />
                      ) : null
                    }

                  </div>
                  <div className="friends-friend__rows">
                    <div className="friends-friend__rows_side">
                      <span className="friends-friend__title">{friend.firstname} {friend.lastname}</span>
                      <div className="friends-friend__info">
                        <div className="friends-friend__role_wrap">
                          <span className="friends-friend__role">{friend.state?.rank}</span>
                        </div>
                        <div className="friends-friend__balance">
                          <img
                            alt="Vikita"
                            className="friends-friend__balance_icon"
                            src="/img/clicker.png"
                          />
                          {nFormatter(friend.state?.points || 0, 1, 3)}
                        </div>
                      </div>
                    </div>
                    <div className="friends-friend__rows_side">
                      <div className="friends-friend__profit">
                        <span className="friends-friend__profit_title">Ваш бонус в час</span>
                        <div className="friends-friend__profit_value">
                          <img
                            alt="Vikita"
                            className="friends-friend__profit__icon"
                            src="/img/clicker.png"
                          />
                          +{nFormatter(friend.state?.pointsBonusHourlyRate || 0, 1, 3)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

            {
              friends.loaded === LOADING_TYPES.LOADING ? (
                <Loader/>
              ) : null
            }
          </div>
        </div>
      </div>
      <Menu/>
    </FriendsWrap>
  );
};

export default Friends;
