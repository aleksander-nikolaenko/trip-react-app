import React from 'react';

import { ICONS } from '../icons';
import s from './SearchInput.module.css';

interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
}

export const SearchInput = ({
  value,
  placeholder,
  onChange,
}: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <label className={s.label}>
      <ICONS.SEARCH className={s.icon} />
      <input
        className={s.input}
        name="search"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};
