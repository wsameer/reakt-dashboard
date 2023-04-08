import React, { useState, useEffect, useCallback } from 'react';
import SearchWeather from './SearchWeather';
import './Weather.scss';
import BusyIndicator from '../common/BusyIndicator';
import CityData from '../../assets/city.list.json';
import WeatherDetails from './WeatherDetails';
import { printTodaysDate, convertToLocalTime } from '../../utils/utils';
import { WEATHER_API, WEATHER_ICONS } from './constants';
import mockData from './mockData.json';

const Weather = () => {
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [weatherData, setWeatherData] = useState({});

	/**
	 * Handles on query change event
	 * @param {object} event The DOM object
	 */
	const onQueryChange = event => {
		if (!event) {
			return false;
		}
		if (typeof event === 'string') {
			return setQuery(event);
		}
		return setQuery(event.target.value);
	};

	const handleApiError = message => {
		console.log(message);
	};

	/**
	 * GET weather data for the user entered city
	 * @param {string} city The name of the city
	 */
	const getWeatherData = useCallback(
		city => {
			setIsLoading(false);
			const cityName = city ? city : query;
			const findCity = CityData.find(
				city => city.name.toLowerCase() === cityName.toLowerCase()
			);

			if (!findCity || findCity.length === 0) {
				setQuery('');
				setWeatherData({});
				return handleApiError('No record found');
			}

			setIsLoading(false);
			setQuery('');
			setWeatherData(mockData);

			// fetch(`${WEATHER_API.base}?id=${findCity.id}&units=metric&appid=${WEATHER_API.key}`)
			// 	.then(res => res.json())
			// 	.then(result => {
			// 		setIsLoading(false);
			// 		if (result.cod !== 200) {
			// 			return handleApiError(result.message);
			// 		}
			// 		setQuery('');
			// 		setWeatherData(result);
			// 	});
		},
		[query, setIsLoading, setWeatherData, CityData]
	);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://ipapi.co/json/')
			.then(res => res.json())
			.then(response => {
				if (response.city) {
					onQueryChange(response.city);
					getWeatherData(response.city);
					setIsLoading(false);
				}
			})
			.catch(err => {
				setIsLoading(false);
				handleApiError(err);
			});

		return () => {
			setQuery('');
		};
	}, []);

	return (
		<div className="weather-container">
			<main>
				<h5 className="d-block d-md-none mb-3">Weather App</h5>
				<SearchWeather
					getWeatherData={getWeatherData}
					isLoading={isLoading}
					onQueryChange={onQueryChange}
					query={query}
				/>

				{isLoading ? (
					<BusyIndicator />
				) : (
					<div className="card weather-card">
						{typeof weatherData.main == 'undefined' ? (
							<p className="text-center">No data found</p>
						) : (
							<div className="card-body p-0-mob">
								<div className="media text-center">
									<div className="media-body">
										<h5 className="card-title mt-0 city-name">
											{weatherData.name.toUpperCase()}
										</h5>
										<h6 className="card-subtitle mb-0 text-muted">
											{printTodaysDate()}
										</h6>
									</div>
								</div>

								<div className="temp-box text-center">
									<div className="temp">
										<span className="min float-left pl-4">
											{Math.round(weatherData.main.temp_min)}°
										</span>
										<span className="main">
											{Math.round(weatherData.main.temp)}
										</span>
										<span className="temp-unit">°C</span>
										<span className="min float-right pr-4">
											{Math.round(weatherData.main.temp_max)}°
										</span>
									</div>

									<div className="weather f-med mb-4">
										<img
											className="mr-1"
											src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
											height="42px"
											alt=""
										/>
										{weatherData.weather[0].main}
									</div>
								</div>

								<div className="row mt-4 f-small">
									<div className="col text-left p-0">
										<WeatherDetails
											title="Wind Speed"
											value={`${weatherData.wind.speed} km/h`}
											iconPath={WEATHER_ICONS.wind}
										/>
									</div>
									<div className="col text-left p-0">
										<WeatherDetails
											title="Humidity"
											value={`${weatherData.main.humidity} %`}
											iconPath={WEATHER_ICONS.humidity}
										/>
									</div>
									<div className="w-100"></div>
									<div className="col text-left p-0">
										<WeatherDetails
											title="Pressure"
											value={weatherData.main.pressure}
											iconPath={WEATHER_ICONS.pressure}
										/>
									</div>
									<div className="col text-left p-0">
										<WeatherDetails
											title={convertToLocalTime(weatherData.sys.sunrise)}
											value={convertToLocalTime(weatherData.sys.sunset)}
											iconPath={WEATHER_ICONS.daynight}
										/>
									</div>
								</div>

								<div className="col-sm mt-5 text-center">
									<div className="card round-card">
										<div className="card-body">
											<span className="capitaliz">
												{weatherData.weather[0].description}
											</span>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</main>
		</div>
	);
};

export default Weather;
