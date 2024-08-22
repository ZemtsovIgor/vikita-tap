import { ExpandMore } from '@mui/icons-material';
import React, {useCallback, useEffect, useState} from 'react';
import find from 'lodash/find';

import {
  SelectContainer, SelectElement, SelectInput, SelectLabel,
  SelectListItem,
} from './SelectAutocomplete.Styles';
import {Icon} from "../Icon/Icon";
import {FormControlLabel, Checkbox} from "@mui/material";

interface Props {
  className?: string;
  name: string;
  placeholder?: string;
  selectedValue?: string;
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
  withFlag?: boolean
}

export const SelectAutocomplete: React.FC<Props> = (props: Props) => {
  const {
    className,
    name,
    selectedValue,
    image,
    placeholder,
    fullWidth,
    list,
    values,
    label,
    disabled,
    onChange,
    onRemove,
    onSelect,
    disableRotate,
    position,
    error,
    withFlag
  } = props;

  const [autoValue, setAutoValue] = useState<{ text: string, value: string }>({ text: '', value: '' });

  useEffect(() => {
    if(selectedValue) {
      const newVal = find(list, {value: selectedValue})
      setAutoValue(newVal)
    }
  }, [list, selectedValue]);

  const onItemChange = useCallback(
    (value: string) => {
      if (!onChange) return;
      onChange(value);
    },
    [onChange]
  );

  const onItemRemove = useCallback(
    (e: React.ChangeEvent<any>, value: string) => {
      e.preventDefault();
      e.stopPropagation();

      if (!onRemove) return;

      onRemove(value);
    },
    [onRemove]
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
    <SelectContainer className={`${error ? '-error' : ''}`}>
      {
        label ? (
          <SelectLabel>{label}</SelectLabel>
        ) : null
      }
      {
        image ? (
          <img className="select-img" src={image} alt="Tier" />
        ) : null
      }

      {
        withFlag ? (
          <img className="select-img" src={`/img/langs/${selectedValue ? selectedValue.toLowerCase() : 'unknown'}.svg`} alt="sc"/>
        ) : null
      }

      <SelectElement
        nuprops={menuProps}
        id={name}
        className={`${className} ${disableRotate ? '-disable-rotate' : ''} ${image ? '-image' : ''} ${withFlag ? '-flag' : ''}`}
        name={name}
        options={list || []}
        value={autoValue}
        disabled={disabled}
        fullWidth={fullWidth}
        aria-describedby={`${name}-text`}
        popupIcon={<ExpandMore />}
        getOptionLabel={(option: any) => option?.text || ''}
        isOptionEqualToValue={(option: any, value: any) => option?.value === value?.value}
        onChange={(e: React.ChangeEvent<any>, option: any) => onSelect ? () => {return false} : onItemChange(option?.value)}
        renderOption={(props: any, item: any) => (
          <SelectListItem
            {...props}
            key={`drop-down-item-${item.value}`}
            value={item.value}
            className={`${item.value === selectedValue ? 'Mui-selected' : ''}`}
          >
            {
              onSelect && values ? (
                <FormControlLabel
                  className="select-check__item"
                  control={
                    <Checkbox
                      checked={values.includes(item.value.toLowerCase())}
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
              ) : withFlag ? (
                <div className="flag">
                  <img className="flag-image" src={`/img/langs/${item.value.toLowerCase()}.svg`} alt="cp" />
                  <span className="flag-text">{item.text}</span>
                </div>
              ) : item.text
            }
            {
              onRemove ? (
                <button
                  className="select-remove"
                  onClick={(e) => onItemRemove(e, item.value)}
                  type="button"
                >
                  <Icon name="trash" size="20" />
                </button>
              ) : null
            }
          </SelectListItem>
        )}
        renderInput={(params: any) => (
          <SelectInput
            {...params}
            placeholder={placeholder}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </SelectContainer>

  );
};
