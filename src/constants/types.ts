export type ISODateFormat = `${number}-${string}-${string}`;
export type EURDateFormat = `${string}.${string}.${number}`;
export type Weather = TodayForecast | null | undefined;

export interface City {
  id: number;
  name: string;
  imgSrc: string;
}

export interface Trip {
  id: string;
  city: City | undefined;
  startDate: string | null;
  endDate: string | null;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DayForecast {
  datetime: string;
  icon: string;
  temp: number;
  tempmax: number;
  tempmin: number;
}
export interface TodayForecast {
  address: string;
  days: DayForecast[];
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
