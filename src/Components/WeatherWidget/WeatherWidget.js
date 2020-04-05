import React, { useState, useEffect } from 'react'
import './WeatherWidget.css';
import WeatherDetails from './WeatherDetails';
import SearchWeather from './SearchWeather';

const WEATHER_API = {
  key: "b3966a87a8b7d22cccd1386b3d791c1d",
  base: "https://api.openweathermap.org/data/2.5/"
};

const WEATHER_ICONS = {
  wind: require('../../assets/icons8-wind-50.png'),
  humidity: require('../../assets/icons8-wet-50.png'),
  daynight: require('../../assets/icons8-day-and-night-50.png'),
  pressure: require('../../assets/icons8-atmospheric-pressure-50.png')
};

function WeatherWidget() {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    return () => {
      setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
    }
  })

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  }

  /**
   * GET weather data for the user entered city
   */
  const getWeatherData = () => {
    fetch(`${WEATHER_API.base}weather?q=${query}&units=metric&APPID=${WEATHER_API.key}`)
      .then(res => res.json())
      .then(result => {
        if (result.cod !== 200) {
          return handleApiError(result.message);
        }
        // console.log(result);
        setQuery('');
        setWeatherData(result);
        // setWeatherData({ "coord": { "lon": 73.86, "lat": 18.52 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n" }], "base": "stations", "main": { "temp": 27.39, "feels_like": 26.89, "temp_min": 27.39, "temp_max": 27.39, "pressure": 1012, "humidity": 34, "sea_level": 1012, "grnd_level": 950 }, "wind": { "speed": 0.83, "deg": 359 }, "clouds": { "all": 12 }, "dt": 1585587376, "sys": { "country": "IN", "sunrise": 1585530008, "sunset": 1585574252 }, "timezone": 19800, "id": 1259229, "name": "Pune", "cod": 200 });
      });
  }

  const handleApiError = (message) => {
    console.log(message);
  }

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

  return (
    <div className="weather-container">
      <main>
        <SearchWeather
          onQueryChange={onQueryChange}
          getWeatherData={getWeatherData}
          query={query}
        />

        <div className="card">
          {(typeof weatherData.main == 'undefined') ? ('') : (
            <div className="card-body">
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

                {/* <div className="row mt-2 f-small hidden">
                  <div className="col-sm-6 text-right">
                    <span>Feels like {Math.round(weatherData.main.feels_like)} °C</span>
                  </div>
                  <div className="col-sm-6 text-left">
                    <span>Sunset {}</span>
                  </div>
                </div> */}
              </div>

              <div className="row mt-4 f-small">
                <div className="col text-left">
                  <WeatherDetails
                    title="Wind Speed"
                    value={`${weatherData.wind.speed} km/h`}
                    iconPath={WEATHER_ICONS.wind} />
                </div>
                <div className="col text-left">
                  <WeatherDetails
                    title="Humidity"
                    value={`${weatherData.main.humidity} %`}
                    iconPath={WEATHER_ICONS.humidity} />
                </div>
                <div className="w-100"></div>
                <div className="col text-left">
                  <WeatherDetails
                    title="Pressure"
                    value={weatherData.main.pressure}
                    iconPath={WEATHER_ICONS.pressure} />
                </div>
                <div className="col text-left">
                  <WeatherDetails
                    title={convertToLocalTime(weatherData.sys.sunrise)}
                    value={convertToLocalTime(weatherData.sys.sunset)}
                    iconPath={WEATHER_ICONS.daynight} />
                </div>
              </div>

              <div className="col-sm mt-4 text-center">
                <div className="card round-card">
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

      </main>
    </div>
  )
}

export default WeatherWidget
