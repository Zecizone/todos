import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('добавление новой задачи', () => {
  render(<App />);

  const inputs = screen.getAllByPlaceholderText(/Введите новую задачу/i);
  const input = inputs[0];
  const button = screen.getByText(/Добавить/i);

  fireEvent.change(input, { target: { value: 'Первая задача' } });
  fireEvent.click(button);

  const tasks = screen.getAllByText(/Первая задача/i);
  const firstTask = tasks[0]; 
  expect(firstTask).toBeInTheDocument();
});

test('переключение выполнения задачи', () => {
  render(<App />);

  const inputs = screen.getAllByPlaceholderText(/Введите новую задачу/i);
  const input = inputs[0];
  const button = screen.getByText(/Добавить/i);

  fireEvent.change(input, { target: { value: 'Первая задача' } });
  fireEvent.click(button);

  const tasks = screen.getAllByText(/Первая задача/i);
  const task = tasks[0];
  fireEvent.click(task);

  expect(task).toHaveStyle('text-decoration: line-through');
});

test('проверка общего списка задач', () => {
    render(<App />);
  
    const inputs = screen.getAllByPlaceholderText(/Введите новую задачу/i);
    const input = inputs[0];
    const button = screen.getByText(/Добавить/i);
  
    fireEvent.change(input, { target: { value: 'Первая задача' } });
    fireEvent.click(button);
  
    fireEvent.change(input, { target: { value: 'Вторая задача' } });
    fireEvent.click(button);
  
    const tasks = screen.getAllByText(/Первая задача/i);
    const firstTask = tasks[0];
    const secondTask = screen.getAllByText(/Вторая задача/i)[0]; 
  
    expect(firstTask).toBeInTheDocument(); 
    expect(secondTask).toBeInTheDocument(); 
  });
  
