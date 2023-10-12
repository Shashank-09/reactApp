import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from './project6/component/TodoList';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);