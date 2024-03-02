import axios from 'axios';
import { toast } from 'react-toastify';
import { City, TodayForecast } from 'src/constants/types';
import { formatDateToISOString } from 'src/utils/formatDate';

const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_KEY = process.env.REACT_APP_API_KEY;

const searchParams = new URLSearchParams({
  unitGroup: 'metric',
  include: 'days',
  key: API_KEY || '',
  contentType: 'json',
});

export const GetForecastFromDateToDate = async (
  city: City['name'] | undefined,
  fromDate: string | null | undefined,
  toDate: string | null | undefined
): Promise<TodayForecast | null | undefined> => {
  try {
    if (!fromDate || !toDate) return null;
    const from = formatDateToISOString(new Date(fromDate));
    const to = formatDateToISOString(new Date(toDate));

    const url = `${BASE_URL}${city}/${from}/${to}?${searchParams}`;
    const response = await axios.get(url);
    return {
      address: response.data.address,
      days: response.data.days,
    };
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};

export const GetTodayForecast = async (
  city: string | undefined
): Promise<TodayForecast | null | undefined> => {
  try {
    if (!city) return null;
    const url = `${BASE_URL}${city}/today?${searchParams}`;
    const response = await axios.get(url);
    return {
      address: response.data.address,
      days: response.data.days,
    };
  } catch (error) {
    toast.error('Oops, an error occurred');
  }
};
