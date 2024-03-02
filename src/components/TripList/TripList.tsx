import { TripCard } from '../TripCard/TripCard';
import { Trip } from 'src/constants/types';

import s from './TripList.module.css';

interface TripListProps {
  list: Trip[];
  selectedTrip: Trip | null;
  onChange: (newTrip: Trip) => void;
}

export const TripList = ({ list, selectedTrip, onChange }: TripListProps) => {
  return (
    <div className={s.cardList}>
      {list.map((trip) => (
        <TripCard
          key={trip.id}
          city={trip.city?.name}
          imgSrc={trip.city?.imgSrc}
          imgAlt={trip.city?.name}
          startDate={trip.startDate}
          endDate={trip.endDate}
          onClick={() => onChange(trip)}
          active={selectedTrip?.id === trip.id}
        />
      ))}
    </div>
  );
};
