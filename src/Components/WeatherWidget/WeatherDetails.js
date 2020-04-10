import React from 'react'
import PropTypes from 'prop-types'

const WeatherDetails = props => {
  return (
    <div className="weather-details p-2">
      <img 
        src={props.iconPath} 
        alt="appropriate-logo.png" 
      />
      <div>
        <p className="mb-0">{props.title}</p>
        <p>{props.value}</p>
      </div>
    </div>
  )
}

WeatherDetails.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  iconPath: PropTypes.string,
  style: PropTypes.object,
}

export default WeatherDetails
