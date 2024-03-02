import { Trip } from './types';

export const initialTrips: Trip[] = [
  {
    id: '497f50ea-703f-4073-a638-892bea5a1573',
    city: { id: 100, name: 'Kyiv', imgSrc: './city-img/kyiv.jpg' },
    startDate: '2024-01-01',
    endDate: '2024-01-06',
  },
  {
    id: 'c614f9c0-c6ea-4d89-837f-06a4ea22741c',
    city: {
      id: 101,
      name: 'Kharkiv',
      imgSrc: './city-img/kharkiv.jpg',
    },
    startDate: '2024-03-01',
    endDate: '2024-03-07',
  },
  {
    id: 'e5bc711e-bb25-473d-a196-0cad3acc5ee4',
    city: { id: 103, name: 'Odessa', imgSrc: './city-img/odessa.jpg' },
    startDate: '2024-05-01',
    endDate: '2024-05-07',
  },
];
