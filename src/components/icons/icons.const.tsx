import { ReactComponent as SearchIcon } from 'src/assets/svg/search.svg';
import { ReactComponent as CalendarIcon } from 'src/assets/svg/calendar.svg';
import { ReactComponent as ArrowIcon } from 'src/assets/svg/arrow.svg';
import { ReactComponent as ClearDayIcon } from 'src/assets/svg/weather-icons/clear-day.svg';
import { ReactComponent as ClearNightIcon } from 'src/assets/svg/weather-icons/clear-night.svg';
import { ReactComponent as CloudyIcon } from 'src/assets/svg/weather-icons/cloudy.svg';
import { ReactComponent as FogIcon } from 'src/assets/svg/weather-icons/fog.svg';
import { ReactComponent as HailIcon } from 'src/assets/svg/weather-icons/hail.svg';
import { ReactComponent as PartlyCloudyDayIcon } from 'src/assets/svg/weather-icons/partly-cloudy-day.svg';
import { ReactComponent as PartlyCloudyNightIcon } from 'src/assets/svg/weather-icons/partly-cloudy-night.svg';
import { ReactComponent as RainSnowShowersDayIcon } from 'src/assets/svg/weather-icons/rain-snow-showers-day.svg';
import { ReactComponent as RainSnowShowersNightIcon } from 'src/assets/svg/weather-icons/rain-snow-showers-night.svg';
import { ReactComponent as RainSnowIcon } from 'src/assets/svg/weather-icons/rain-snow.svg';
import { ReactComponent as RainIcon } from 'src/assets/svg/weather-icons/rain.svg';
import { ReactComponent as ShowersDayIcon } from 'src/assets/svg/weather-icons/showers-day.svg';
import { ReactComponent as ShowersNightIcon } from 'src/assets/svg/weather-icons/showers-night.svg';
import { ReactComponent as SleetIcon } from 'src/assets/svg/weather-icons/sleet.svg';
import { ReactComponent as SnowShowersDayIcon } from 'src/assets/svg/weather-icons/snow-showers-day.svg';
import { ReactComponent as SnowShowersNightIcon } from 'src/assets/svg/weather-icons/snow-showers-night.svg';
import { ReactComponent as SnowIcon } from 'src/assets/svg/weather-icons/snow.svg';
import { ReactComponent as ThunderRainIcon } from 'src/assets/svg/weather-icons/thunder-rain.svg';
import { ReactComponent as ThunderShowersDayIcon } from 'src/assets/svg/weather-icons/thunder-showers-day.svg';
import { ReactComponent as ThunderShowersNightIcon } from 'src/assets/svg/weather-icons/thunder-showers-night.svg';
import { ReactComponent as ThunderIcon } from 'src/assets/svg/weather-icons/thunder.svg';
import { ReactComponent as WindIcon } from 'src/assets/svg/weather-icons/wind.svg';

interface Icons {
  [key: string]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const ICONS: Icons = {
  ARROW: ArrowIcon,
  CALENDAR: CalendarIcon,
  SEARCH: SearchIcon,
};

export const WEATHER_ICONS: Icons = {
  'clear-day': ClearDayIcon,
  'clear-night': ClearNightIcon,
  cloudy: CloudyIcon,
  fog: FogIcon,
  hail: HailIcon,
  'partly-cloudy-day': PartlyCloudyDayIcon,
  'partly-cloudy-night': PartlyCloudyNightIcon,
  'rain-snow-showers-day': RainSnowShowersDayIcon,
  'rain-snow-showers-night': RainSnowShowersNightIcon,
  'rain-snow': RainSnowIcon,
  rain: RainIcon,
  'showers-day': ShowersDayIcon,
  'showers-night': ShowersNightIcon,
  sleet: SleetIcon,
  'snow-showers-day': SnowShowersDayIcon,
  'snow-showers-night': SnowShowersNightIcon,
  snow: SnowIcon,
  'thunder-rain': ThunderRainIcon,
  'thunder-showers-day': ThunderShowersDayIcon,
  'thunder-showers-night': ThunderShowersNightIcon,
  thunder: ThunderIcon,
  wind: WindIcon,
};
