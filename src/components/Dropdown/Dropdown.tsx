import React, { useState, useRef, useEffect } from 'react';

import s from './Dropdown.module.css';
import { ICONS } from '../icons';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  id: string;
  className?: string;
  placeHolder?: string;
  options: Option[];
  isSearchable?: boolean;
  initialValue?: Option | null;
  onClick?: () => void;
  onChange?: (option: Option) => void;
}

export const Dropdown = ({
  id,
  className,
  placeHolder = '',
  options,
  isSearchable,
  initialValue,
  onClick,
  onChange,
}: DropdownProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(
    initialValue || null
  );

  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const input = document.getElementById(id);
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        !input?.contains(e.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, [id]);

  const handleInputClick = () => {
    setShowMenu(!showMenu);
    if (onClick) onClick();
  };

  const onItemClick = (option: Option) => {
    setSelectedValue(option);
    if (onChange) onChange(option);
  };

  const isSelected = (option: Option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getOptions = (): Option[] => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div className={s.container}>
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={`${s.input} ${className ? className : ''}`}
      >
        <p className={!selectedValue ? s.placeHolder : s.selectedValue}>
          {!selectedValue ? placeHolder : selectedValue.label}
        </p>
        <ICONS.ARROW />
      </div>
      {showMenu && (
        <div className={s.menu}>
          {isSearchable && (
            <div className={s.search}>
              <input
                id={id}
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
              />
            </div>
          )}
          {getOptions().map((option) => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`${s.item} ${isSelected(option) ? s.selected : ''}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
