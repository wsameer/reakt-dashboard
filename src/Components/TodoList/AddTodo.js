import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ addNewTodo }) => {

  const [newTodo, setnewTodo] = useState('');

  const handleAddTodo = (e) => {
    if (newTodo === '') {
      return;
    }
    addNewTodo(newTodo);
    setnewTodo('');
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="New task"
        aria-label="Add a new Todo Item"
        aria-describedby="new-todo-item"
        value={newTodo}
        onChange={e => setnewTodo(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          disabled={!newTodo}
          type="button"
          id="new-todo-item"
          onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
};

AddTodo.propTypes = {
  addNewTodo: PropTypes.func.isRequired
};

export default AddTodo;
