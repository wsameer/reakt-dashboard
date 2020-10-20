import React from 'react';
import PropTypes from 'prop-types';

const deleteIcon = require('../../assets/images/icons8-delete-view-50.png');

const DeleteTodo = ({ deleteAllTodos }) => {
  console.log(`DeleteTodo is created`);
  return (
    <button
      title="delete all"
      className="btn btn-delete float-right"
      onClick={deleteAllTodos}>
      <img src={deleteIcon} alt="" />
    </button>
  );
};

DeleteTodo.propTypes = {
  deleteAllTodos: PropTypes.func.isRequired
};

export default DeleteTodo;
