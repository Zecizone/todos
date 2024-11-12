import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'incomplete' | 'completed'>('all');

  const addTodo = (text: string) => {
    if (text.trim()) { 
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const filteredTodos = filter === 'incomplete' ? incompleteTodos :
                         filter === 'completed' ? completedTodos :
                         todos;

  return (
    <div>
      <h1>todos</h1>
      <div className='conteiner'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
      
      <div className='buttons'>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>Общий список задач</button>
        <button onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>Невыполненные задачи</button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Выполненные задачи</button>
      </div>
      </div>
    </div>
  );
};

export default App;
