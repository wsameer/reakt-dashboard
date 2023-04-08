import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchWeather = ({ query, getWeatherData, isLoading, onQueryChange }) => {
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
	query: PropTypes.string.isRequired,
	getWeatherData: PropTypes.func.isRequired,
	onQueryChange: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default SearchWeather;
