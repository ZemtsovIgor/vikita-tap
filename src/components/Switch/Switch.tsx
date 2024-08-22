import React from 'react';

import { SwitchStyles } from './Switch.Styles';

interface Props {
  className?: string;
  checked?: any;
  onChange?: any;
  name?: string;
  color?: string;
  children?: any;
  disabled?: boolean;
}

export const Switch: React.FC<Props> = ({
  className,
  checked,
  onChange,
  name,
  color,
  children,
  disabled
}) => {
  return (
    <SwitchStyles
      className={className}
      checked={checked}
      tabIndex={-1}
      onChange={onChange}
      name={name}
      color={color}
      disabled={disabled}
    >
      {children}
    </SwitchStyles>
  );
};
