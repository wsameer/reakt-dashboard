import React, { Suspense } from 'react';
import './App.scss';
import BusyIndicator from './Components/BusyIndicator';
const WeatherWidget = React.lazy(() => import('./Components/WeatherWidget/WeatherWidget'));
const TodoList = React.lazy(() => import('./Components/TodoList/TodoList'));
const Football = React.lazy(() => import('./Components/Football/Football'));
const Footer = React.lazy(() => import('./Components/Footer'));

function App() {
  return (
    <Suspense fallback={<BusyIndicator />}>
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
    </Suspense>
  );
};

export default App;
