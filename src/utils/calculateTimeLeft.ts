export const calculateTimeLeft = (date: string | null) => {
  if (!date) return null;
  const difference = new Date(date).getTime() - new Date().getTime();

  if (difference > 0) {
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
    return timeLeft;
  }
  return null;
};
