import React, { FC, useRef, useEffect } from 'react';
import {Balance, ReferralsContainer, ReferralsList} from "./Referrals.Styles";
import {useTranslation} from "react-i18next";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {API_URL, BOT_URL} from "../../const/general.constants";
import useWebSocket from "../../hooks/useWebSocket";
import {LOADING_TYPES} from "../../types/app.d";
import {DEFAULT_FRIENDS_LOADING_LIMIT} from "../../const/app.constants";
import {WebSocketPaginator} from "../../types/webSocketTypes";
import {FRIEND} from "../../types/friends";

const Referrals: FC = () => {
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
    <ReferralsContainer>
      <Balance>
        <span className="balance">{friends.meta.total || 0}<span className="gray">/10</span></span>

        <span className="balance-text">💃  {t('referrals.title')}</span>
        <span className="balance-text -description">{t('referrals.description')}</span>
        <div className="balance-btn__wrap">
          <Button
            as={Link}
            to={`https://t.me/share/url?url=${BOT_URL}?start=${uid}`}
            className="balance-btn"
          >Invite a friend</Button>
        </div>
      </Balance>

      <ReferralsList>
        <span className="referrals-title">Your Invited Friends</span>
        <div
          ref={listContainer}
          className="referrals-list"
          onScroll={handleScroll}
        >
          {
            friends.list.map((friend: FRIEND, index: number) => (
              <div className="referrals-item">
                <div className="referrals-item__avatar">
                  <img className="referrals-item__avatar_img"
                       alt="avatar"
                       src={`${API_URL}/api/v1/a/clients/${friend.uid}/avatar?w=160&h=160`}
                  />
                </div>
                <div className="referrals-item__content -center">
                  <span className="referrals-item__content_title">{friend.firstname} {friend.lastname}</span>
                  <span className="referrals-item__content_description">2 days ago</span>
                </div>
                <div className="referrals-item__content">
                  <span className="referrals-item__content_text">+{friend.state?.pointsBonusHourlyRate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </ReferralsList>
    </ReferralsContainer>
  );
};

export default Referrals;
