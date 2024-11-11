import React from 'react';
import { Todo } from '../types';
interface TodoItemProps {
    todo: Todo;
    toggleComplete: (id: number) => void;
}
declare const TodoItem: React.FC<TodoItemProps>;
export default TodoItem;
