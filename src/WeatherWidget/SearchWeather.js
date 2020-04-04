import React from 'react'

function SearchWeather({ onQueryChange, getWeatherData, query }) {

  const keyPressEvent = (event) => {
    console.log("Herere");
    if (event.keyCode === 13 && query.length > 3) {
      getWeatherData();
    }
  }

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
  )
}

export default SearchWeather
