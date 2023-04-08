import React, { useState, useEffect } from 'react';
import { todos as t } from './Todos.json';
import './Todo.scss';
import DeleteTodo from './DeleteTodo';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todo = () => {
	const [todos, setTodos] = useState(t);
	const [lastTodoId, setLastTodoId] = useState(0);

	const addNewTodo = newTodo => {
		const newItem = {
			title: newTodo,
			createdTime: new Date().getTime(),
			completed: false,
			completedTime: null,
			id: lastTodoId + 1
		};

		setTodos(prevTodos => (prevTodos.length ? [...prevTodos, newItem] : [newItem]));
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].completed = todos[index].completed === false ? true : false;
		newTodos[index].completedTime = new Date().getTime();
		setTodos(newTodos);
	};

	const deleteAllTodos = () => {
		setTodos(prev => (prev.length = 0));
	};

	useEffect(() => {
		console.log(t);
		const lastTodoId = t?.reduce((acc, current) => {
			if (current?.id > acc?.id) {
				return current.id;
			}
			return acc?.id;
		});
		setLastTodoId(lastTodoId);
	}, [t]);

	return (
		<div className="card todo-wrapper mr-4">
			<div className="card-body">
				<h5 className="card-title mb-3">Todays Tasks</h5>

				{todos.length ? <DeleteTodo deleteAllTodos={deleteAllTodos} /> : null}

				<AddTodo addNewTodo={addNewTodo} />

				{!todos || todos.length === 0 ? (
					<p className="text-center mild">No todo items</p>
				) : (
					<ul className="list-group list-group-flush">
						{todos.map((todo, index) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								index={index}
								removeTodo={removeTodo}
								completeTodo={completeTodo}
							/>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Todo;
