import React from 'react'
import './App.css'
import WeatherWidget from './WeatherWidget/WeatherWidget'
import RandomList from './Components/RandomList/RandomList.js'

function App() {
  return (
    <div className="container-fluid">
      <div className="round-square">
        <div className="row">
          <div className="col-sm-4 p-0 left-side">
            <WeatherWidget />
          </div>
          <div className="col-sm-8 p-0 right-side">
            <RandomList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
