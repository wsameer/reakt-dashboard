import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = React.lazy(() => import('./WeatherWidget/WeatherWidget'));
const TodoList = React.lazy(() => import('./TodoList/TodoList'));
const Football = React.lazy(() => import('./Football/Football'));

const Layout = (props) => {
  return (
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
  );
};

Layout.propTypes = {

};

export default Layout;
