import React, {FC, useEffect, useRef, useState} from 'react';
import { animated, useTransition } from '@react-spring/web';
import useWebApp from "../../hooks/useWebApp";
import {WebApp} from "../../types/twa-types";
import {ClickerContainer, ClickerSparkText} from './Clicker.Styles';
import useWebSocket from "../../hooks/useWebSocket";

export const Clicker: FC = () => {
  const webApp: WebApp = useWebApp();
  const { sendTap, wallet: {availableEnergy, tapThreshold}} = useWebSocket();

  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [sparks, setSparks] = useState<any[]>([]);
  const timer = useRef<number>();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    if (sparks.length) {
      timer.current = window.setTimeout(() => {
        removeOldSparks();
      }, 1000)
    }

    return () => {
      clearTimeout(timer.current)
    }
  // @ts-ignore
  }, [sparks.length])

  const transition = useTransition(sparks, {
    from: {
      opacity: 1,
      marginTop: 0
    },
    enter: { opacity: 0, marginTop: -100},
    trail: 150
  });

  const removeOldSparks = () => {
    const currentTime: number = Date.now();
    const newSparks = [...sparks].filter((spark: any) => {
      return currentTime < (spark.timeStamp + 1000)
    });

    setSparks(newSparks);

    if (newSparks.length) {
      timer.current = window.setTimeout(() => {
        removeOldSparks();
      }, 1000)
    }
  };

  const onTouchEvent = (event: any) => {
    const touch = event.changedTouches[0];
    clickOnClicker({clientX: touch.clientX, clientY: touch.clientY});
  };

  const onTouchStartEvent = (event: any) => {
    event.preventDefault();
    if (!isTouched) {
      setIsTouched(true);
    }
  };

  const onClickEvent = (event: any) => {
    event.preventDefault();
    if (isTouched) return false;
    clickOnClicker({clientX: event.clientX, clientY: event.clientY});
  };

  const clickOnClicker = ({clientX, clientY}: {clientX: number, clientY: number}) => {
    if (availableEnergy >= tapThreshold) {
      webApp.HapticFeedback?.impactOccurred("soft");
      sendTap();

      const newItem = {
        text: `+${tapThreshold}`,
        x: clientX,
        y: clientY - 100,
        timeStamp: Date.now()
      };

      setSparks((prevSparks) => ([...prevSparks, newItem]));
    }
  };

  return (
    <ClickerContainer>
      <div
        className="vikita-cl"
        onTouchEnd={(event: any) => onTouchEvent(event)}
        onTouchStart={(event: any) => onTouchStartEvent(event)}
        onClick={(event: any) => onClickEvent(event)}
      >
        <img
          alt="Vikita"
          className="clicker-img"
          src="/img/clicker.png"
        />

        <div
          aria-hidden
          className="clicker-sparks"
        >
          {transition(
            (style, item) =>
              item ? (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: item.y,
                    left: item.x,
                    borderRadius: "5px"
                  }}
                >
                  <ClickerSparkText>{item.text}</ClickerSparkText>
                </animated.div>
              ) : null
          )}
        </div>
      </div>
    </ClickerContainer>
  );
};
export default Clicker;
