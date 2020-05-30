import React, { useState, useEffect } from 'react';
import './WeatherWidget.scss';
import WeatherDetails from './WeatherDetails';
import SearchWeather from './SearchWeather';

const WEATHER_API = {
  key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

const WEATHER_ICONS = {
  wind: require('../../assets/images/icons8-wind-50.png'),
  humidity: require('../../assets/images/icons8-wet-50.png'),
  daynight: require('../../assets/images/icons8-day-and-night-50.png'),
  pressure: require('../../assets/images/icons8-atmospheric-pressure-50.png')
};

const CityData = require('../../assets/city.list.json');

const WeatherWidget = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  /**
   * Handles on query change event
   * @param {object} e The DOM object
   */
  const onQueryChange = (e) => {
    if (!e) {
      return false;
    }
    if (typeof e === "string") {
      return setQuery(e);
    }
    return setQuery(e.target.value);
  }

  /**
   * GET weather data for the user entered city
   * @param {string} city The name of the city
   */
  const getWeatherData = (city) => {
    const cityName = city ? city : query;
    let findCity = CityData.find(city => ((city.name).toLowerCase() === cityName.toLowerCase()));

    if (findCity.length === 0) {
      setQuery('');
      setWeatherData({});
      return handleApiError('No record found');
    }

    fetch(`${WEATHER_API.base}weather?id=${findCity.id}&units=metric&APPID=${WEATHER_API.key}`)
      .then(res => res.json())
      .then(result => {
        if (result.cod !== 200) {
          return handleApiError(result.message);
        }
        setQuery('');
        setWeatherData(result);
      });
  }

  // TODO
  const handleApiError = (message) => {
    console.log(message);
  };

  /**
   * Format and returns todays date
   * in human readable format
   */
  const printTodaysDate = () => {
    const d = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} | ${currentTime}`;
  }

  /**
   * Convert timestamp to human readable time 24 hours format
   * @param {String} timeStamp The timestamp received from the API
   */
  const convertToLocalTime = (timeStamp) => {
    if (!timeStamp) {
      return '';
    }
    let theDate = new Date(timeStamp * 1000);
    return theDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }

  useEffect(() => {
    // fetch('https://ipapi.co/json/')
    //   .then(res => res.json())
    //   .then(response => {
    //     if (response.city) {
    //       onQueryChange(response.city);
    //       getWeatherData(response.city);
    //     }
    //   })
    //   .catch(err => handleApiError(err));

    return () => {
      setQuery(null);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    });

    return () => clearInterval(interval);
  }, [setCurrentTime]);

  return (
    <div className="weather-container">
      <main>
        <h5 className="d-block d-md-none mb-3">Weather App</h5>

        <SearchWeather
          onQueryChange={onQueryChange}
          getWeatherData={getWeatherData}
          query={query}
        />

        <div className="card weather-card">
          {(typeof weatherData.main == 'undefined')
            ? <p className="text-center">No data found</p>
            : (
              <div className="card-body p-0-mob">
                <div className="media text-center">
                  <div className="media-body">
                    <h5 className="card-title mt-0 city-name">{weatherData.name.toUpperCase()}</h5>
                    <h6 className="card-subtitle mb-0 text-muted">{printTodaysDate()}</h6>
                  </div>
                </div>

                <div className="temp-box text-center">
                  <div className="temp">
                    <span className="min float-left pl-4">{Math.round(weatherData.main.temp_min)}°</span>
                    <span className="main">{Math.round(weatherData.main.temp)}</span>
                    <span className="temp-unit">°C</span>
                    <span className="min float-right pr-4">{Math.round(weatherData.main.temp_max)}°</span>
                  </div>

                  <div className="weather f-med mb-4">
                    <img
                      className="mr-1"
                      src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                      height="42px"
                      alt="" />
                    {weatherData.weather[0].main}
                  </div>
                </div>

                <div className="row mt-4 f-small">
                  <div className="col text-left">
                    <WeatherDetails
                      title="Wind Speed"
                      value={`${weatherData.wind.speed} km/h`}
                      iconPath={WEATHER_ICONS.wind}
                    />
                  </div>
                  <div className="col text-left">
                    <WeatherDetails
                      title="Humidity"
                      value={`${weatherData.main.humidity} %`}
                      iconPath={WEATHER_ICONS.humidity}
                    />
                  </div>
                  <div className="w-100"></div>
                  <div className="col text-left">
                    <WeatherDetails
                      title="Pressure"
                      value={weatherData.main.pressure}
                      iconPath={WEATHER_ICONS.pressure}
                    />
                  </div>
                  <div className="col text-left">
                    <WeatherDetails
                      title={convertToLocalTime(weatherData.sys.sunrise)}
                      value={convertToLocalTime(weatherData.sys.sunset)}
                      iconPath={WEATHER_ICONS.daynight}
                    />
                  </div>
                </div>

                <div className="col-sm mt-4 text-center">
                  <div className="card round-card">
                    <div className="card-body">
                      <span className="capitaliz">{weatherData.weather[0].description}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </main>
    </div>
  )
};

export default WeatherWidget;
