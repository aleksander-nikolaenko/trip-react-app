import { FormEvent, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown } from '../Dropdown';
import { ICONS } from '../icons';
import { STORAGE_KEYS } from 'src/constants/storage.const';

import cities from '../../constants/cities.json';

import { City, Trip } from 'src/constants/types';
import 'react-datepicker/dist/react-datepicker.css';
import s from './ModalForm.module.css';

interface ModalFormProps {
  onClose: () => void;
}

export const ModalForm = ({ onClose }: ModalFormProps) => {
  const [selectedCity, setSelectedCity] = useState<City['name']>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};

    if (!selectedCity) {
      errors.city = 'Please select a city.';
    }

    if (!startDate) {
      errors.startDate = 'Please select a start date.';
    }

    if (!endDate) {
      errors.endDate = 'Please select an end date.';
    }

    if (startDate && endDate && startDate > endDate) {
      errors.endDate = 'End date must be equal to or after the start date.';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const tripData: Trip = {
      id: uuidv4(),
      city: cities.find((city) => city.name === selectedCity),
      startDate: String(startDate),
      endDate: String(endDate),
    };
    const tripList = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.TRIP_LIST) || '[]'
    );
    tripList.push(tripData);

    localStorage.setItem(STORAGE_KEYS.TRIP_LIST, JSON.stringify(tripList));
    onClose();
  };

  const citiesList = useMemo(() => {
    return cities.map((city) => {
      return { label: city.name, value: city.name };
    });
  }, []);

  return (
    <form
      className={s.form}
      onSubmit={handleSubmitForm}
    >
      <div className={s.formField}>
        {formErrors.city && <div className={s.error}>{formErrors.city}</div>}
        <label
          className={s.label}
          htmlFor="dropdown"
        >
          <span>{'* '}</span>City
        </label>
        <Dropdown
          className={s.dropdown}
          isSearchable
          id="dropdown"
          placeHolder="Please select a city"
          options={citiesList}
          onChange={({ value }) => {
            setSelectedCity(value);
          }}
        />
      </div>
      <div className={s.formField}>
        {formErrors.startDate && (
          <div className={s.error}>{formErrors.startDate}</div>
        )}
        <label className={s.label}>
          <span>{'* '}</span>Start date
        </label>
        <DatePicker
          showIcon
          toggleCalendarOnIconClick
          icon={<ICONS.CALENDAR className={s.icon} />}
          selected={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={handleStartDateChange}
          minDate={minDate}
          maxDate={maxDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className={s.datePicker}
          placeholderText="Select date"
        />
      </div>

      <div className={s.formField}>
        {formErrors.endDate && (
          <div className={s.error}>{formErrors.endDate}</div>
        )}
        <label className={s.label}>
          <span>{'* '}</span>End date
        </label>
        <DatePicker
          showIcon
          icon={<ICONS.CALENDAR className={s.icon} />}
          selected={endDate}
          dateFormat="yyyy-MM-dd"
          onChange={handleEndDateChange}
          minDate={startDate || minDate}
          maxDate={maxDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          className={s.datePicker}
          placeholderText="Select date"
        />
      </div>

      <div className={s.buttonWrapper}>
        <button
          className={`${s.buttonCancel} ${s.button}`}
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className={`${s.buttonSave} ${s.button}`}
          type="submit"
        >
          Save
        </button>
      </div>
      <div id="root-portal"></div>
    </form>
  );
};
