import React from 'react'
import './App.css'
import WeatherWidget from './Components/WeatherWidget/WeatherWidget'
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="container-fluid">
      <div className="round-square">
        <div className="row">
          <div className="col-sm-4 p-0 left-side">
            <WeatherWidget />
          </div>
          <div className="col-sm-8 right-side components">
            <div className="col-sm-6 p-0">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
