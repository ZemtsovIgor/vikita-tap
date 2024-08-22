import React, { FC } from 'react';
import { Balance, TasksList } from "./Earn.Styles";
import {useTranslation} from "react-i18next";
import Button from "../../components/Button/Button";

const Earn: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Balance>
        <span className="balance">0<span className="gray">/2</span></span>

        <span className="balance-text">💎{t('tasks.title')}</span>
        <span className="balance-text -description">{t('tasks.description')}</span>
      </Balance>

      <TasksList>
        <span className="tasks-title">Active Tasks</span>
        <div className="tasks-list">
          <div className="tasks-item">
            <div className="tasks-item__icon">
              <span className="tasks-item__icon_img">💎</span>
            </div>
            <div className="tasks-item__content -center">
              <span className="tasks-item__content_title">Join our Telegram group</span>
              <span className="tasks-item__content_description">+50</span>
            </div>
            <div className="tasks-item__content">
              <Button className="tasks-btn">Start</Button>
            </div>
          </div>
          <div className="tasks-item">
            <div className="tasks-item__icon">
              <span className="tasks-item__icon_img">💎</span>
            </div>
            <div className="tasks-item__content -center">
              <span className="tasks-item__content_title">Follow us on Twitter</span>
              <span className="tasks-item__content_description">+100</span>
            </div>
            <div className="tasks-item__content">
              <Button className="tasks-btn">Claim</Button>
            </div>
          </div>
        </div>
        <span className="tasks-title">Completed Tasks</span>
        <div className="tasks-empty">
          <div className="tasks-empty-content">
            <span className="tasks-empty__icon">🎯</span>
            <span className="tasks-empty__title">You Have No Completed Tasks Yet</span>
            <span className="tasks-empty__text">Start completing tasks to see your<br />achievements here!</span>
          </div>
        </div>
      </TasksList>
    </>
);
};

export default Earn;
