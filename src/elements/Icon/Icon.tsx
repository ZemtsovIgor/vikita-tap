import React from 'react';

import IconsSVG from './sprite.svg';

export interface Props {
  name?: string;
  color?: string;
  size?: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ name, color, size, className }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={color}
      width={size}
      height={size}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
};
