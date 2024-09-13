import React, {FC, useRef, useState} from 'react';
import {Button, Loader, Toogler} from "../../elements";
import { MissionsWrap} from "./Missions.Styles";
import {Trans, useTranslation} from "react-i18next";
import {LOADING_TYPES} from "../../types/app.d";
import Menu from "../../components/Menu/Menu";
import {MISSION} from "../../types/missions";
import {Link} from "react-router-dom";
import { ReactComponent as InfoSVG } from "../../assets/images/info.svg";

enum MISSIONS_TYPES {
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

interface Props {
}

const missions = {
  loaded: LOADING_TYPES.LOADED,
  meta: {
    limit: 5,
    offset: 0,
    total: 0
  },
  list: [
    {
      id: '1',
      title: 'title',
      description: 'description description description description description description description description description',
      reward: 500,
      start: '00.00.0000 00:00',
      end: '00.00.0000 00:00',
      verification:false,
      done: false,
      level: 5
    },
    {
      id: '1',
      title: 'title',
      description: 'description description description description description description description description description',
      reward: 500,
      start: '00.00.0000 00:00',
      end: '00.00.0000 00:00',
      verification:false,
      done: false,
      level: 5
    }
  ]
}

const Missions: FC<Props> = () => {
  const { t } = useTranslation();
  const [missionType, setMissionType] = useState<MISSIONS_TYPES>(MISSIONS_TYPES.ACTIVE)

  const listContainer = useRef(null);

  const handleScroll = () => {
    if (listContainer.current) {
      const { scrollTop, scrollHeight, clientHeight } = listContainer.current;
      if ((scrollTop + 1) > (scrollHeight - clientHeight)) {
        console.log('load more');
      }
    }
  };

  const onChangeMissionsType = (selectedMissionType: string) => {
    console.log('selectedMissionType', selectedMissionType);
    const newMissionType: MISSIONS_TYPES = MISSIONS_TYPES[selectedMissionType as keyof typeof MISSIONS_TYPES];
    setMissionType(newMissionType);
  };

  return (
    <MissionsWrap>
      <div className="missions-wrapper">
        <div className="missions-header">
          <span className="missions-header__title">{t('missions.title')}</span>
          <p className="missions-header__description" dangerouslySetInnerHTML={{__html: t('missions.description')}} />
        </div>
        <div className="missions-count__hold">
          <div className="missions-count">
            <div className="missions-count__title_container">
              <span className="missions-count__title">{t('missions.earned')}</span>
            </div>
            <div className="missions-count__container_container">
              <div className="missions-count__container">
                <div className="missions-count__wrap">
                  <span className="missions-count__text">{missions.meta.total} ZP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="missions-list__title_wrap">
            <span className="missions-list__title">{t('missions.tasks.description.title')}</span>
            <Toogler
              className="missions-list__title_toogler"
              labels={
                [
                  {
                    title: t('missions.tasks.description.active'),
                    value: `${MISSIONS_TYPES.ACTIVE}`
                  },
                  {
                    title: t('missions.tasks.description.completed'),
                    value: `${MISSIONS_TYPES.FINISHED}`
                  }
                ]
              }
              activeValue={missionType}
              badgeLabel='22'
              onChange={(val: string) => onChangeMissionsType(val)}
            />
          </div>
          <div className="missions-list__container">
            <div className="missions-list">
              <div
                ref={listContainer}
                className="missions-list__wrap"
                onScroll={handleScroll}
              >
                {
                  missions.list.map((mission: MISSION, index: number) => (
                    <div
                      key={`mission-${index}`}
                      className="mission"
                    >
                      <div className="mission-container">
                        <div className="mission-badge__container">
                          <div className="mission-badge">
                            <div className="mission-badge__side">
                              <span className="mission-badge__title">{t('missions.tasks.task.level')} {mission.level}</span>
                              <span className="mission-badge__description">+{mission.reward}ZP</span>
                            </div>
                            <div className="mission-badge__side">
                              <InfoSVG className="mission-badge__icon"/>
                            </div>
                          </div>
                        </div>
                        <div className="mission-rows">
                          <div className="mission-rows__side">
                            <span className="mission-title">{mission.title}</span>
                            <p className="mission-description">{mission.description}</p>
                            <span className="mission-reward">{t('missions.tasks.task.reward')}: {mission.reward}zp</span>
                            <span className="mission-interval">00.00.0000 00:00 UTC - 00.00.0000 00:00 UTC</span>
                          </div>
                          <div className="mission-rows__side">
                            <img
                              alt="Vikita"
                              className="mission-img"
                              src="/img/yoda.png"
                            />
                          </div>
                        </div>
                        <div className="mission-actions">
                          <Button
                            as={Link}
                            to="#"
                            className="mission-actions__btn"
                          >
                            {t('missions.tasks.task.actions.start')}
                          </Button>
                          <Button
                            as={Link}
                            to="#"
                            className="mission-actions__btn -check -loading"
                          >
                            {t('missions.tasks.task.actions.check')}
                            {mission.verification ? <Loader/> : null}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                }

                {
                  missions.loaded === LOADING_TYPES.LOADING ? (
                    <Loader/>
                  ) : null
                }
              </div>
            </div>
          </div>
        <Menu/>
      </div>
    </MissionsWrap>
  );
};

export default Missions;
