import { WEATHER_ICONS } from '../icons/icons.const';
import s from './DayCard.module.css';

interface DayCardProps {
  icon: string;
  dayOfWeek: string;
  tempMax: number;
  tempMin: number;
}

export const DayCard = ({
  icon,
  dayOfWeek,
  tempMax,
  tempMin,
}: DayCardProps) => {
  const WeatherIcon = WEATHER_ICONS[icon];
  return (
    <div className={s.dayWrapper}>
      <p className={s.dayOfWeek}>{dayOfWeek}</p>
      <WeatherIcon className={s.icon} />
      <p className={s.temperature}>
        {Math.round(tempMax)}&#176;/{Math.round(tempMin)}&#176;
      </p>
    </div>
  );
};
