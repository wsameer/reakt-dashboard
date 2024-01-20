import windIcon from '../../assets/images/icons8-wind-50.png';
import humidityIcon from '../../assets/images/icons8-wet-50.png';
import daynightIcon from '../../assets/images/icons8-day-and-night-50.png';
import pressureIcon from '../../assets/images/icons8-atmospheric-pressure-50.png';

export const WEATHER_API = {
  key: import.meta.env.VITE_OPEN_API_WEATHER_KEY,
  base: 'https://api.openweathermap.org/data/2.5/weather'
};

export const LOCATION_VIA_IP_API = 'https://ipapi.co/json/';

export const WEATHER_ICONS = {
  wind: windIcon,
  humidity: humidityIcon,
  daynight: daynightIcon,
  pressure: pressureIcon
};
