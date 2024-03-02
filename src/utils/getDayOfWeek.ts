export const getDayOfWeek = (date: string) => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const newDate = new Date(date);
  const dayOfWeek = daysOfWeek[newDate.getDay()];
  return dayOfWeek;
};
