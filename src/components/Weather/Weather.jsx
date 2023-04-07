import React, { useState, useEffect } from 'react';
import SearchWeather from './SearchWeather';
import './Weather.scss';

const Weather = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [weatherData, setWeatherData] = useState([]);

	/**
	 * GET weather data for the user entered city
	 * @param {string} city The name of the city
	 */
	const getWeatherData = city => {
		setIsLoading(true);
		const cityName = city ? city : query;
		let findCity = CityData.find(
			city => city.name.toLowerCase() === cityName.toLowerCase()
		);

		if (!findCity || findCity.length === 0) {
			setQuery('');
			setWeatherData({});
			return handleApiError('No record found');
		}

		fetch(
			`${WEATHER_API.base}weather?id=${findCity.id}&units=metric&APPID=${WEATHER_API.key}`
		)
			.then(res => res.json())
			.then(result => {
				setIsLoading(false);
				if (result.cod !== 200) {
					return handleApiError(result.message);
				}
				setQuery('');
				setWeatherData(result);
			});
	};

	return (
		<div className="weather-container">
			<main>
				<h5 className="d-block d-md-none mb-3">Weather App</h5>
				<SearchWeather
					query={''}
					onQueryChange={() => null}
					getWeatherData={getWeatherData}
					isLoading={isLoading}
				/>
			</main>
		</div>
	);
};

export default Weather;
