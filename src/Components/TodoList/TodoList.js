import React, { useState } from 'react';
import { todos as t } from './Todo.model.json';
import AddTodo from './AddTodo.js';
import TodoItem from './TodoItem.js';
import './TodoList.scss';
import DeleteTodo from './DeleteTodo';

const TodoList = () => {
  const [todos, setTodos] = useState(t);

  const addNewTodo = (newTodo) => {
    const newItem = {
      "description": newTodo,
      "createdTime": new Date().getTime(),
      "completed": false,
      "completedTime": null
    };

    setTodos((prevTodos) => {
      return prevTodos.length ? [...prevTodos, newItem] : [newItem]
    });
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = todos[index].completed === false ? true : false;
    newTodos[index].completedTime = new Date().getTime();
    setTodos(newTodos);
  };

  return (
    <div className="card todo-wrapper">
      <div className="card-body">
        <h5 className="card-title mb-3">Todays Tasks</h5>

        <AddTodo addNewTodo={addNewTodo} />

        {(!todos || todos.length === 0)
          ? <p className="text-center mild">No todo items</p>
          : <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default TodoList;
