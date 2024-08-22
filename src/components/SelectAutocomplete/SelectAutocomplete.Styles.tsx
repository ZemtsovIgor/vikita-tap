import { Autocomplete, MenuItem, TextField } from '@mui/material';
import styled from 'styled-components';

export const SelectContainer: any = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  .select {
    &-img {
      width: 8vmin;
      height: 8vmin;
      border-radius: 50%;
      margin: 0.5vmin 5vmin 0.5vmin 0
    }
    
    &-remove {
      display: none;
      background: transparent;
      border: 0;
      outline: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
`;

export const SelectLabel: any = styled.label`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark-gray);
  margin-bottom: 6px;
`;

export const SelectInput: any = styled(TextField)`
  font-family: var(--default-font);
  
  .MuiInputBase-root {
    padding: 0;
    width: 100%;
    color: var(--tg-theme-text-color);
    background: var(--tg-theme-bg-color);
    border-radius: var(--border-radius);
    box-shadow: none;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 4vmin;
    line-height: 6vmin;
    transition: box-shadow 0.3s ease-in-out;
    font-family: var(--default-font);
    cursor: pointer;
    
    &.Mui-focused {
      box-shadow: none;
    }
  }
  
  .MuiInputBase-input {
    padding: 0!important;
    cursor: pointer;
    
    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }

    &::placeholder {
      opacity: 1;
      font-weight: 400;
      font-size: 4vmin;
      line-height: 6vmin;
      color: var(--tg-theme-hint-color);
      transition: opacity 0.3s ease-in-out;
    }

    &:disabled {
      color: var(--gray);
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
  
  .MuiAutocomplete {
    &-endAdornment {
      right: 0!important;
      position: relative;
      top: 0;
    }
    
    &-clearIndicator {
      display: none;
    }
    
    &-popupIndicator {
      padding: 0;
      margin-right: 0;
      right: -6px;
      
      .MuiSvgIcon-root {
        color: var(--tg-theme-gray);
        width: 1em;
        height: 1em;
      }
    }
    
    &-inputRoot {
      padding: 0!important;
    }
  }

  .MuiSelect-select {
    padding: 9.3px 14px!important;
  }

  &.-image {
    padding-left: 46px;
  }

  &.Mui-focused {
    box-shadow: none;
  }

  &.Mui-disabled {
    background: #F9FAFB;
    color: #667085;
  }

  &.status {

    .MuiMenu-list {
      padding: 0;
    }
  }

  &.-flag {
    .flag {
      display: flex;
      align-items: center;

      &-image {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
      }

      &-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--black);
      }
    }
  }
`;

export const SelectElement: any = styled(Autocomplete)`
  cursor: pointer;
  
  .MuiSelect-select {
    padding: 0;
  }

  &.-image {
    padding-left: 46px;
  }
  
  &.Mui-disabled {
    background: #F9FAFB;
    color: #667085;
  }

  &.status {

    .MuiMenu-list {
      padding: 0;
    }
  }
  
  &.-flag {
    .flag {
      display: flex;
      align-items: center;
      
      &-image {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
      }
      
      &-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--black);
      }
    }
  }

  .MuiMenu-list {
    padding: 4px 0;
  }

  .MuiMenuItem-root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px 11px 10px 14px;

    &.Mui-selected {
      background: transparent;

      &:hover {
        background: #F5F8FF;
      }
      
      &:after {
        content: '';
        display: block;
        position: absolute;
        right: 13px;
        width: 16px;
        height: 11px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY2NjMgMUw1LjQ5OTY3IDEwLjE2NjdMMS4zMzMwMSA2IiBzdHJva2U9IiM0NDRDRTciIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    
    &:hover {
      background: #F5F8FF;
      
      & .select-remove {
        display: block;
      }
    }
  }

  .MuiListItem-button {
    border-radius: 8px;
    padding: 10px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.06) 71.01%,
        rgba(255, 255, 255, 0) 99.52%
      );
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    &:hover,
    &:focus {
      background-color: transparent;
      background-image: linear-gradient(
        90deg,
        rgba(232, 232, 232, 0.12) 0%,
        rgba(196, 196, 196, 0) 78.12%
      );
    }

    &.Mui-selected {
      background-color: transparent;
    }
  }

  .MuiListItem-root.Mui-selected,
  .MuiListItem-root.Mui-selected:hover {
    background-color: transparent;
  }
`;

export const SelectListItem: any = styled(MenuItem)`
  &.Mui-focused {
    background-color: #F5F8FF!important;
  }
  
  svg {
    stroke: #667085;
  }

  .flag {
    display: flex;
    align-items: center;

    &-image {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 8px;
    }

    &-text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--black);
    }
  }
`;
export const Placeholder: any = styled.div`
  font-weight: 400;
  font-size: 4vmin;
  line-height: 6vmin;
  color: var(--tg-theme-hint-color);
`;

