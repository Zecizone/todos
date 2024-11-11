import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li onClick={() => toggleComplete(todo.id)} style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
