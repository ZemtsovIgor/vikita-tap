import React from 'react';

import { ButtonContainer } from './Button.Styles';

interface Props {
  type?: string;
  disabled?: boolean;
  className?: string;
  children?: any;
  onClick?: (e?: any) => void;
  primary?: boolean;
  secondary?: boolean;
  as?: any;
  to?: any;
  target?: string;
  tabIndex?: number;
}

export const Button: React.FC<Props> = ({
  as,
  to,
  type,
  disabled,
  className,
  children,
  onClick,
  primary,
  secondary,
  target,
  tabIndex,
}) => {
  const handleClick = (e: any) => {
    if (!onClick) return false;
    return onClick(e);
  };
  return (
    <ButtonContainer
      as={as}
      to={to}
      className={`${className} ${primary ? '-primary' : ''} ${secondary ? '-secondary' : ''}`}
      type={type}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={(e: any) => handleClick(e)}
      target={target}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
