import React from 'react';
import PropTypes from 'prop-types';
import DELETE_ICON from '../../assets/images/icons8-delete.svg';
import { convertTime } from '../../utils/utils';

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
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
				<button className="float-right btn btn-no-bg" onClick={() => removeTodo(index)}>
					<img src={DELETE_ICON} alt="Delete Todo" width="14" />
				</button>
				<p className="desc m-0" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
					{todo.title}
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
