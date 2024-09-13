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
        <div className="friends-header">
          <span className="friends-header__title">{t('friends.title')}</span>
          {/*<p className="friends-header__description">Invite your friends and play together. Get 20% of your referrals' claims.</p>*/}
        </div>
        <div className="friends-counts">
          <div className="friends-count">
            <span className="friends-count__title">{t('friends.count')}</span>
            <div className="friends-count__container">
              <div className="friends-count__wrap">
                <span className="friends-count__text">{friends.meta.total}</span>
              </div>
            </div>
          </div>
          <div className="friends-count -tockens">
            <span className="friends-count__title">{t('friends.received')}</span>
            <div className="friends-count__container">
              <div className="friends-count__wrap">
                <span className="friends-count__text">0,000 ZP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="friends-actions">
          <Button
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?start=${uid}`}
            className="friends-actions__btn"
          >
            {t('friends.invite')}
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
        <div className="friends-list__description">
          <span className="friends-list__description_title">{t('friends.my_friends')}</span>
        </div>
        <div className="friends-list__container">
          <div className="friends-list">
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
                    <div
                      className="friends-friend__container"
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
                        <div className="friends-friend__avatar_rank_container">
                          <span className="friends-friend__avatar_rank">{friend.state?.rank}</span>
                        </div>
                      </div>
                      <div className="friends-friend__rows">
                        <div className="friends-friend__rows_side">
                          <span className="friends-friend__title">{friend.firstname} {friend.lastname}</span>
                          <div className="friends-friend__info">
                            <div className="friends-friend__balance">
                              <img
                                alt="Vikita"
                                className="friends-friend__balance_icon"
                                src="/img/vikita.png"
                              />
                              {nFormatter(friend.state?.points || 0, 1, 3)}
                            </div>
                          </div>
                        </div>
                        <div className="friends-friend__rows_side">
                          <div className="friends-friend__profit">
                            <span className="friends-friend__profit_title">Your hourly bonus</span>
                            <div className="friends-friend__profit_value">
                              <img
                                alt="Vikita"
                                className="friends-friend__profit__icon"
                                src="/img/vikita.png"
                              />
                              +{nFormatter(friend.state?.pointsBonusHourlyRate || 0, 1, 3)}
                            </div>
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
          <Menu/>
        </div>
      </div>
    </FriendsWrap>
);
};

export default Friends;
