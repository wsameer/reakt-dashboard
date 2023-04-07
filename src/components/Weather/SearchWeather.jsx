import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useWeather } from './useWeather';

const SearchWeather = ({ getWeatherData, isLoading, onQueryChange }) => {

	const [query, setQuery] = useState('');

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

	const keyPressEvent = event => {
		event.preventDefault();
		if (event.keyCode === 13 && query.length > 3) {
			getWeatherData();
		}
	};

	return (
		<div className="form-group search-box">
			<input
				disabled={isLoading}
				type="text"
				className="form-control form-control-lg"
				placeholder="Search for a city..."
				aria-describedby="emailHelp"
				onChange={onQueryChange}
				value={query}
				onKeyUp={keyPressEvent}
			/>
		</div>
	);
};

SearchWeather.propTypes = {
	getWeatherData: PropTypes.func.isRequired,
	onQueryChange: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default SearchWeather;
