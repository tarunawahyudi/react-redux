import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import {
  addTodoActionCreator,
  toggleTodoActionCreator,
  deleteTodoActionCreator,
} from '../states/todos/action';

function TodoList() {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  function onAddTodo(text) {
    const id = `todo-${+new Date()}`;
    dispatch(
      addTodoActionCreator({
        id,
        text,
      }),
    );
  }

  function onToggleTodo(id) {
    dispatch(toggleTodoActionCreator(id));
  }

  function onDeleteTodo(id) {
    dispatch(deleteTodoActionCreator(id));
  }

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={onToggleTodo}
              deleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
