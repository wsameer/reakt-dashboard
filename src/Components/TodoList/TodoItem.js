import React from 'react';
import PropTypes from 'prop-types';

const DELETE_ICON = require('../../assets/images/icons8-delete.svg');

const TodoItem = (props) => {

  const { todo, index, completeTodo, removeTodo } = props;

  const convertTime = (t) => {
    const d = new Date(t);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input position-static"
          type="checkbox"
          name="completed"
          checked={todo.completed}
          onChange={() => completeTodo(index)}
        />
      </div>
      <div className="pl-4">
        <button
          className="float-right btn btn-no-bg"
          onClick={() => removeTodo(index)}>
          <img
            src={DELETE_ICON}
            alt="Delete Todo"
            width="20px"
          />
        </button>
        <p
          className="desc m-0"
          style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          {todo.description}
        </p>
        <small>{convertTime(todo.createdTime)}</small>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoItem;

