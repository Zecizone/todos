import React from 'react';
import { Todo } from '../types';
interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
}
declare const TodoList: React.FC<TodoListProps>;
export default TodoList;
