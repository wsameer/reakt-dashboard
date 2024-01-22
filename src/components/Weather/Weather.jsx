import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { LOCATION_VIA_IP_API, WEATHER_API, WEATHER_ICONS } from './constants';
import SearchWeather from './SearchWeather';
import WeatherDetails from './WeatherDetails';
import BusyIndicator from '../common/BusyIndicator';
import { printTodaysDate, convertToLocalTime } from '../../utils/utils';
import CityData from '../../assets/city.list.json';
import './Weather.scss';
import { fetcher, mockGetWeather } from '../../utils/api';

const Weather = React.memo(() => {
	const [weatherDetails, setWeatherDetails] = useState([]);

	const { data: cityName, isLoading: isLocationLoading } = useSWR(LOCATION_VIA_IP_API, () =>
		fetcher(LOCATION_VIA_IP_API).then(response => response.city)
	);

	const findCity =
		cityName && CityData?.find(city => city.name.toLowerCase() === cityName.toLowerCase());

	const { data: weatherData, isLoading } = useSWR(
		() =>
			cityName
				? `${WEATHER_API.base}?id=${findCity.id}&units=metric&appid=${WEATHER_API.key}`
				: null,
		mockGetWeather
	);

	useEffect(() => {
		if (weatherData) {
			setWeatherDetails([
				{
					id: 1,
					title: 'Wind Speed',
					value: `${weatherData?.wind.speed} km/h`,
					iconPath: WEATHER_ICONS.wind
				},
				{
					id: 2,
					title: 'Humidity',
					value: `${weatherData?.main.humidity} %`,
					iconPath: WEATHER_ICONS.humidity
				},
				{
					id: 3,
					title: 'Pressure',
					value: weatherData?.main.pressure,
					iconPath: WEATHER_ICONS.pressure
				},
				{
					id: 4,
					title: convertToLocalTime(weatherData?.sys.sunrise),
					value: convertToLocalTime(weatherData?.sys.sunset),
					iconPath: WEATHER_ICONS.daynight
				}
			]);
		}
	}, [weatherData]);

	if (isLocationLoading || isLoading) {
		return (
			<div className="weather-container">
				<div className="full-page">
					<BusyIndicator />
				</div>
			</div>
		);
	}

	return (
		<div className="weather-container">
			<div>
				<h5 className="d-block d-md-none mb-3">Weather App</h5>
				<SearchWeather isLoading={isLoading} cityName={cityName} />
				<div className="card weather-card">
					<div className="card-body p-0-mob">
						<div className="media text-center">
							<div className="media-body">
								<h5 className="card-title mt-0 city-name">{weatherData?.name.toUpperCase()}</h5>
								<h6 className="card-subtitle mb-0 text-muted">{printTodaysDate()}</h6>
							</div>
						</div>

						<div className="temp-box text-center">
							<div className="temp">
								<span className="min float-left pl-4">
									{Math.round(weatherData?.main.temp_min)}°
								</span>
								<span className="main">{Math.round(weatherData?.main.temp)}</span>
								<span className="temp-unit">°C</span>
								<span className="min float-right pr-4">
									{Math.round(weatherData?.main.temp_max)}°
								</span>
							</div>

							<div className="weather f-med mb-4">
								<img
									className="mr-1"
									src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
									height="42px"
									alt=""
								/>
								{weatherData?.weather[0].main}
							</div>
						</div>

						<div className="row mt-4 f-small">
							{weatherDetails?.map(detail => (
								<>
									<div className="col text-left p-0" key={detail.id}>
										<WeatherDetails
											title={detail.title}
											value={detail.value}
											iconPath={detail.iconPath}
										/>
									</div>
									{detail.id === 2 && <div className="w-100"></div>}
								</>
							))}
						</div>

						<div className="col-sm mt-5 text-center">
							<div className="card round-card">
								<div className="card-body">
									<span className="capitaliz">{weatherData?.weather[0].description}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

Weather.displayName = 'Weather';
export default Weather;
