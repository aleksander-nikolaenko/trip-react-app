import { DayForecast } from 'src/constants/types';
import s from './DaysList.module.css';
import { getDayOfWeek } from 'src/utils/getDayOfWeek';
import { DayCard } from '../DayCard';

interface DaysListProps {
  list: DayForecast[];
}

export const DaysList = ({ list }: DaysListProps) => {
  return (
    <div className={s.cardList}>
      {list.map((day) => {
        return (
          <DayCard
            key={day.datetime}
            icon={day.icon}
            dayOfWeek={getDayOfWeek(day.datetime)}
            tempMax={day.tempmax}
            tempMin={day.tempmin}
          />
        );
      })}
    </div>
  );
};
