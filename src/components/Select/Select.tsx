import { ExpandMore } from '@mui/icons-material';
import React, {useCallback} from 'react';

import {
  Placeholder,
  SelectContainer, SelectElement, SelectLabel,
  SelectListItem,
} from './Select.Styles';
import {FormControlLabel, Checkbox} from "@mui/material";

interface Props {
  className?: string;
  name: string;
  placeholder?: string;
  value?: string;
  values?: string[];
  image?: string;
  fullWidth?: boolean;
  list: any[];
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
  onRemove?: (value: string) => void;
  onSelect?: (value: string) => void;
  IconComponent?: any;
  disableRotate?: boolean;
  position?: string;
  disabled?: boolean,
  withIcon?: string
}

export const Select: React.FC<Props> = (props: Props) => {
  const {
    className,
    value,
    name,
    image,
    placeholder,
    fullWidth,
    list,
    values,
    label,
    disabled,
    onChange,
    onSelect,
    IconComponent,
    disableRotate,
    position,
    withIcon
  } = props;

  const onItemChange = useCallback(
    (value: string) => {
      if (!onChange) return;

      onChange(value);
    },
    [onChange]
  );

  const onItemSelect = useCallback(
    (e: React.ChangeEvent<any>, value: string) => {
      e.preventDefault();
      e.stopPropagation();

      if (!onSelect) return;
      onSelect(value);
    },
    [onSelect]
  );

  const menuProps = {
    disablePortal: true,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: position ? position : 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: position ? position : 'left',
    }
  };

  return (
    <SelectContainer>
      {
        image ? (
          <img className="select-img" src={image} alt="Synchronist" />
        ) : null
      }

      <div className="select-wrap">
        {
          label ? (
            <SelectLabel>{label}</SelectLabel>
          ) : null
        }
        <SelectElement
          MenuProps={menuProps}
          id={name}
          className={`${className} ${disableRotate ? '-disable-rotate' : ''} ${image ? '-image' : ''} ${withIcon ? '-flag' : ''}`}
          name={name}
          value={value}
          disabled={disabled}
          displayEmpty
          renderValue={
            !!value ? undefined : () => <Placeholder>
              {
                withIcon ? <img className="flag-image" src={`/img/${withIcon}/unknown.svg`} alt="sc"/> : null
              }
              {placeholder}
            </Placeholder>
          }
          fullWidth={fullWidth}
          aria-describedby={`${name}-text`}
          IconComponent={IconComponent || ExpandMore}
          onChange={(e: React.ChangeEvent<any>) => onSelect ? () => {return false} : onItemChange(e.target.value)}
        >
          {list.map((item: any, index: number) => (
            <SelectListItem
              key={`drop-down-item-${item.value}-${index + 1}`}
              value={item.value}
            >
              {
                onSelect && values ? (
                  <FormControlLabel
                    className="select-check__item"
                    control={
                      <Checkbox
                        checked={values.includes(item.value.toUpperCase())}
                        aria-describedby={`${name}-text`}
                        onClick={(e: React.ChangeEvent<any>) => onItemSelect(e, item.value)}
                      />
                    }
                    label={
                      <span className="select-check__label">
                <span className={`select-check__text -${item.value.toLowerCase()}`}>{item.text}</span>
              </span>
                    }
                  />
                ) : withIcon ? (
                  <div className="flag">
                    <img className="flag-image" src={`/img/${withIcon}/${item.value.toLowerCase()}.svg`} alt="sc"/>
                    <span className="flag-text">{item.text}</span>
                  </div>
                ) : item.text
              }
            </SelectListItem>
          ))}
        </SelectElement>
      </div>
    </SelectContainer>
  );
};
