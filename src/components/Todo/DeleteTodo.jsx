import React from 'react';
import PropTypes from 'prop-types';
import DELETE_ICON from '../../assets/images/icons8-delete.svg';

const DeleteTodo = ({ deleteAllTodos }) => {
	return (
		<button
			title="delete all"
			className="btn btn-delete float-right"
			onClick={deleteAllTodos}>
			<img src={DELETE_ICON} alt="" />
		</button>
	);
};

DeleteTodo.propTypes = {
	deleteAllTodos: PropTypes.func.isRequired
};

export default DeleteTodo;
