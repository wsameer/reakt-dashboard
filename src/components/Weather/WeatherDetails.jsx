import React from 'react';
import PropTypes from 'prop-types';

const WeatherDetails = ({ iconPath, title, value }) => (
	<div className="weather-details p-2">
		<img src={iconPath} alt={`${title}.png`} />
		<div>
			<p className="mb-0">{title}</p>
			<p>{value}</p>
		</div>
	</div>
);

WeatherDetails.propTypes = {
	title: PropTypes.string,
	value: PropTypes.any,
	iconPath: PropTypes.string
};

export default WeatherDetails;
