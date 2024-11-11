import React from 'react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul className='list'>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => toggleComplete(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
