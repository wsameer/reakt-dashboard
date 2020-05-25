import React from 'react';
import PropTypes from 'prop-types';

const SearchWeather = (props) => {

  const { query, getWeatherData, onQueryChange } = props;

  const keyPressEvent = (event) => {
    event.preventDefault();
    if (event.keyCode === 13 && query.length > 3) {
      getWeatherData();
    }
  };

  return (
    <div className="form-group search-box">
      <input
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
  query: PropTypes.string,
  getWeatherData: PropTypes.func,
  onQueryChange: PropTypes.func
};

export default SearchWeather;
