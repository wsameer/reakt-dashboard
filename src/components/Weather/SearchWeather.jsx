import PropTypes from 'prop-types';

const SearchWeather = ({ isLoading, cityName }) => {
	const keyPressEvent = event => {
		event.preventDefault();
		if (event.keyCode === 13) {
			// mutate
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
				onKeyUp={keyPressEvent}
				value={cityName}
			/>
		</div>
	);
};

SearchWeather.propTypes = {
	cityName: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired
};

SearchWeather.displayName = 'SearchWeather';

export default SearchWeather;
