import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  GetForecastFromDateToDate,
  GetTodayForecast,
} from 'src/services/weather-api';
import { SearchInput } from '../SearchInput';
import { TripList } from '../TripList';
import { Modal } from '../Modal';
import { ModalForm } from '../ModalForm';
import { DaysList } from '../DaysList';
import { STORAGE_KEYS } from 'src/constants/storage.const';
import { initialTrips } from 'src/constants/initialTrips.const';

import { Trip, Weather } from 'src/constants/types';
import s from './MainPageComponent.module.css';
import { TodayWeather } from '../TodayWeather';
import { CountdownTimer } from '../CountdownTimer';

export const MainPageComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [weatherData, setWeatherData] = useState<Weather[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initTripList = (): Trip[] => {
    const tripListStr = localStorage.getItem(STORAGE_KEYS.TRIP_LIST);
    if (!tripListStr) {
      localStorage.setItem(
        STORAGE_KEYS.TRIP_LIST,
        JSON.stringify(initialTrips)
      );
      return initialTrips;
    }
    return JSON.parse(tripListStr);
  };

  const handleInputChange = (newValue: string) => {
    setSearchValue(newValue);
  };
  const handleChangeTrip = (newTrip: Trip) => {
    setSelectedTrip(newTrip);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const filteredTrips = (tripList: Trip[]): Trip[] => {
    if (!searchValue) {
      return tripList;
    }

    return tripList.filter((trip) =>
      trip.city !== undefined
        ? trip.city.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        : false
    );
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      GetTodayForecast(selectedTrip?.city?.name),
      GetForecastFromDateToDate(
        selectedTrip?.city?.name,
        selectedTrip?.startDate,
        selectedTrip?.endDate
      ),
    ])
      .then((data) => {
        setWeatherData(data);
      })
      .catch(() => toast.error('Oops, an error occurred'))
      .finally(() => setIsLoading(false));
  }, [selectedTrip]);

  console.log(weatherData);

  return (
    <section className={s.section}>
      <div className={s.main}>
        <h1 className={s.title}>
          Weather <b>Forecast</b>
        </h1>
        <SearchInput
          value={searchValue}
          placeholder="Search your trip"
          onChange={handleInputChange}
        />
        <div className={s.cardWrapper}>
          <TripList
            selectedTrip={selectedTrip}
            list={filteredTrips(initTripList())}
            onChange={handleChangeTrip}
          />
          <button
            type="button"
            className={s.button}
            onClick={handleOpenModal}
          >
            <p>+</p>Add trip
          </button>
        </div>
        {isLoading ? (
          <div>LOADING...</div>
        ) : (
          weatherData &&
          weatherData[1] && (
            <div className={s.forecastWrapper}>
              <h2 className={s.subtitle}>Week</h2>
              <div className={s.cardWrapper}>
                <DaysList list={weatherData[1]?.days} />
              </div>
            </div>
          )
        )}
      </div>
      <div className={s.weather}>
        {isLoading ? (
          <div style={{ color: 'white' }}>LOADING...</div>
        ) : !selectedTrip ? (
          <div style={{ color: 'white' }}>Select trip please for forecast</div>
        ) : (
          weatherData &&
          weatherData[0] && (
            <TodayWeather
              weather={weatherData[0].days[0]}
              city={weatherData[0].address}
            />
          )
        )}
        {selectedTrip && (
          <CountdownTimer
            startDate={selectedTrip.startDate}
            endDate={selectedTrip.endDate}
          />
        )}
      </div>

      <Modal
        title="Create trip"
        isClose
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <ModalForm onClose={handleCloseModal} />
      </Modal>
    </section>
  );
};
