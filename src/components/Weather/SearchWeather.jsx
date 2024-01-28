import { useState } from 'react';

const SearchWeather = ({ cityName }) => {
	const [city, setCity] = useState(cityName);

	return (
		<div className="form-group search-box">
			<input
				type="text"
				value={city}
				className="form-control form-control-lg"
				placeholder="Search for a city"
				aria-describedby="cityHelp"
				onChange={e => setCity(e.target.value)}
				disabled
			/>
		</div>
	);
};

SearchWeather.displayName = 'SearchWeather';

export default SearchWeather;
