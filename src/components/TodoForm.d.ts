import React from 'react';
interface TodoFormProps {
    addTodo: (text: string) => void;
}
declare const TodoForm: React.FC<TodoFormProps>;
export default TodoForm;
