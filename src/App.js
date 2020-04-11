import React from 'react'
import './App.css'
import WeatherWidget from './Components/WeatherWidget/WeatherWidget'
import TodoList from './Components/TodoList/TodoList'
import Football from './Components/Football/Football'

function App() {
  return (
    <div className="container-fluid">
      <div className="round-square">
        <div className="row">
          <div className="col-sm-4 p-0 left-side">
            <WeatherWidget />
          </div>
          <div className="row col-sm-8 right-side components">
            <div className="col-sm pl-0">
              <TodoList />
            </div>
            <div className="col-sm pr-0">
              <Football />
            </div>
          </div>
        </div>
        <footer className="mt-5 text-muted">
          <div className="container">
            <p className="float-right">
              <a href="https://www.linkedin.com/in/wsameer/" rel="noopener noreferrer" target="_blank">Follow me on Linkedin</a>
            </p>
            <p>This React dashboard project is © <a href="https://github.com/nevrmore" rel="noopener noreferrer" target="_blank">Sameer Waskar</a>, but please fork a branch and customize it for yourself!</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
