import React, { FC } from 'react';
import {connect} from "react-redux";
import { Balance, EnergyList } from "./Energy.Styles";
import {AppStateType} from "../../store";
import {AppReducerState} from "../../store/app/reducers";
import {useTranslation} from "react-i18next";
interface Props {
  app: AppReducerState;
}
const Energy: FC<Props> = (props: Props) => {
  const { app: { energy } } = props;
  const { t } = useTranslation();

  return (
    <>
      <Balance>
        <span className="balance">{energy}<span className="gray">/100</span></span>

        <span className="balance-text">⚡ {t('home.energy.title')}</span>
        <span className="balance-text -description">{t('home.energy.description')}</span>
      </Balance>
      <EnergyList>
        <div className="energy-item">
          <div className="energy-item__avatar">
            <img className="energy-item__avatar_img"
                 alt="avatar"
                 src="data:image/png;base64,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"/>
          </div>
          <div className="energy-item__content -center">
            <span className="energy-item__content_title">Alexander Cooper</span>
            <span className="energy-item__content_description">125/499</span>
          </div>
          <div className="energy-item__content">
            <span className="energy-item__content_text">Beginner</span>
          </div>
        </div>
        <div className="energy-item">
          <div className="energy-item__avatar">
            <span className="energy-item__icon">🎁</span>
          </div>
          <div className="energy-item__content -center">
            <span
              className="energy-item__content_text">Your daily reward is +20. Come back every day to earn more!</span>
          </div>
        </div>
        <div className="energy-item">
          <div className="energy-item__avatar">
            <span className="energy-item__icon">🚀</span>
          </div>
          <div className="energy-item__content -center">
            <span
              className="energy-item__content_text">Telegram Premium users get a 1.5x boost to their daily energy</span>
          </div>
        </div>
      </EnergyList>
    </>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app} = state;
  return {
    app,
  };
};
export default connect(mapStateToProps, {})(Energy);
