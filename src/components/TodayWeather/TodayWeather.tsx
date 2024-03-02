import { DayForecast } from 'src/constants/types';
import { getDayOfWeek } from 'src/utils/getDayOfWeek';
import s from './TodayWeather.module.css';
import { WEATHER_ICONS } from '../icons/icons.const';

interface TodayWeatherProps {
  city: string;
  weather: DayForecast;
}

export const TodayWeather = ({ weather, city }: TodayWeatherProps) => {
  const WeatherIcon = WEATHER_ICONS[weather.icon];
  return (
    <div className={s.todayWeatherWrapper}>
      <p className={s.dayOfWeek}>{getDayOfWeek(weather.datetime)}</p>
      <div className={s.infoWrapper}>
        <WeatherIcon className={s.icon} />
        <p className={s.temperature}>{Math.round(weather.temp)}</p>
        <p className={s.unit}>
          <span>&#176;</span>C
        </p>
      </div>
      <p className={s.city}>{city}</p>
    </div>
  );
};
