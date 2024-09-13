import React, {useState} from 'react';
import find from 'lodash/find';

import { TooglerContainer } from './Toogler.Styles';

interface Props {
  className?: string;
  labels: {
    title: string;
    value: string;
  }[];
  activeValue: string;
  badgeLabel?: number;
  onChange: (val: string) => void;
}

export const Toogler: React.FC<Props> = ({className,labels, activeValue, badgeLabel, onChange}) => {
  const [switchPosition, setSwitchPosition] = useState<number>(0)
  const [animation, setAnimation] = useState<string | null>(null)

  const getSwitchAnimation = (value: string) => {
    const activeLabel = find(labels, {value: activeValue}) || labels[0];
    const newLabel = find(labels, {value: value}) || labels[0];
    const activeIndex = labels.indexOf(activeLabel);
    const newIndex = labels.indexOf(newLabel);
    let newAnimation = null;

    if (activeIndex > newIndex) {
      newAnimation = "-to-left";
    } else {
      newAnimation = "-to-right";
    }

    onChange(value);
    setSwitchPosition(newIndex);
    setAnimation(newAnimation);
  };

  return (
    <TooglerContainer
      className={className}
      count={labels.length}
      position={switchPosition}
    >
      <div className="toogler-badge">
        <span className="toogler-badge__text">{badgeLabel}</span>
      </div>
      <div className={`toogler ${animation}`}>
        <div className="toogler-container"/>
      </div>
      <div className="toogler-wrap">
        {
          labels.map((label) => (
            <div className="toogler-btn">
              <input
                className="toogler-input"
                defaultChecked={activeValue === label.value}
                onChange={() => getSwitchAnimation(label.value)}
                name="toogler"
                id={label.value}
                type="radio"
                value={label.value}
              />
              <label
                className={`toogler-label ${activeValue === label.value ? "-selected" : ''}`}
                htmlFor={label.value}
              >
                <span className="toogler-label__text">{label.title}</span>
              </label>
            </div>
          ))
        }
      </div>
    </TooglerContainer>
);
};
