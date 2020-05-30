import React from 'react'
import './App.scss'
import WeatherWidget from './Components/WeatherWidget/WeatherWidget'
import TodoList from './Components/TodoList/TodoList'
import Football from './Components/Football/Football'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app container-fluid">
      <div className="round-square">
        <div className="row">
          <div className="col-sm-4 p-0 left-side">
            <WeatherWidget />
          </div>
          <div className="row col-sm-8 right-side components">
            <div className="col-sm todo-main">
              <TodoList />
            </div>
            <div className="col-sm football-main">
              <Football />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
