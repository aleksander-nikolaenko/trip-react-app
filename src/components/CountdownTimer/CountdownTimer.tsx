import { TimeLeft, Trip } from 'src/constants/types';
import s from './CountdownTimer.module.css';
import { calculateTimeLeft } from 'src/utils/calculateTimeLeft';
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  startDate: Trip['startDate'];
  endDate: Trip['endDate'];
}

export const CountdownTimer = ({ startDate, endDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(startDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(startDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  if (
    !timeLeft &&
    endDate &&
    new Date(endDate).getTime() - new Date().getTime() > 0
  )
    return <div className={s.countdownTimer}> Trip is started</div>;
  if (
    !timeLeft &&
    endDate &&
    new Date(endDate).getTime() - new Date().getTime() < 0
  )
    return <div className={s.countdownTimer}> Trip is finished</div>;

  return (
    <div className={s.countdownTimer}>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.value}>{String(timeLeft?.days).padStart(2, '0')}</p>
          <p className={s.label}>DAYS</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>{String(timeLeft?.hours).padStart(2, '0')}</p>
          <p className={s.label}>HOURS</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>
            {String(timeLeft?.minutes).padStart(2, '0')}
          </p>
          <p className={s.label}>MINUTES</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>
            {String(timeLeft?.seconds).padStart(2, '0')}
          </p>
          <p className={s.label}>SECONDS</p>
        </li>
      </ul>
    </div>
  );
};
