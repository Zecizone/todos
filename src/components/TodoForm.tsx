import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Введите новую задачу"
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;
