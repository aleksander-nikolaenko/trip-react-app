import { formatDateToEURString } from 'src/utils/formatDate';

import s from './TripCard.module.css';

interface TripCardProps {
  imgSrc: string | undefined;
  imgAlt: string | undefined;
  city: string | undefined;
  startDate: string | null;
  endDate: string | null;
  active: boolean;
  onClick: () => void;
}

export const TripCard = ({
  imgSrc,
  imgAlt,
  city,
  startDate,
  endDate,
  active,
  onClick,
}: TripCardProps) => {
  return (
    <div
      onClick={onClick}
      className={active ? `${s.card} ${s.active}` : `${s.card}`}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        width={200}
        height={120}
      />
      <div className={s.description}>
        <p className={s.city}>{city}</p>
        {startDate !== null && endDate !== null && (
          <p className={s.dates}>{`${formatDateToEURString(
            new Date(startDate)
          )} - ${formatDateToEURString(new Date(endDate))}`}</p>
        )}
      </div>
    </div>
  );
};
