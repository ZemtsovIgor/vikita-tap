import { Switch } from '@mui/material';
import styled from 'styled-components';

export const SwitchStyles: any = styled(Switch)`
  align-items: center;
  padding: 0.5vmin!important;
  width: 10vmin!important;
  height: 5.13vmin!important;
  border-radius: 3vmin;
  overflow: hidden;
  margin-right: 3vmin;

  &.MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
  }

  .MuiIconButton-root {
    padding: 0;
  }

  .MuiSwitch-switchBase.Mui-checked {
    transform: translateX(4vmin);
  }

  .MuiSwitch-switchBase {
    padding: 0;
    margin: 0.5vmin;
    margin-left: 1vmin;
  }

  .MuiSwitch-thumb {
    width: 4vmin;
    height: 4vmin;
    background-color: var(--tg-theme-white);
    box-shadow: 0 0 1px rgba(12, 26, 75, 0.24), 0 3px 8px -1px rgba(50, 50, 71, 0.05);
  }

  .MuiSwitch-track {
    height: 5.13vmin;
    background-color: var(--tg-theme-gray);
    border-radius: 3vmin;
    opacity: 1;
  }

  .Mui-checked + .MuiSwitch-track {
    background-color: var(--tg-theme-link-color)!important;
    opacity: 1!important;
  }

  .Mui-checked {
    color: var(--tg-theme-text-color);
  }
`;
