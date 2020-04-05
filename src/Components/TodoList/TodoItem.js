import React from 'react'
import PropTypes from 'prop-types'
const DELETE_ICON = require('../../assets/icons8-trash-can.svg')

function TodoItem(props) {
  const convertTime = (t) => {
    const d = new Date(t);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
  }

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input position-static"
          type="checkbox"
          name="completed"
          checked={props.todo.completed}
          onChange={() => props.completeTodo(props.index)}
        />
      </div>
      <div className="pl-4">
        <button
          className="float-right btn btn-no-bg"
          onClick={() => props.removeTodo(props.index)}>
          <img
            src={DELETE_ICON}
            alt="Delete Todo"
            width="20px"
          />
        </button>
        <p
          className="desc m-0"
          style={{ textDecoration: props.todo.completed ? "line-through" : "" }}>
          {props.todo.description}
        </p>
        <small>{convertTime(props.todo.createdTime)}</small>
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object
}

export default TodoItem
