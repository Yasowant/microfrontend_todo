import React, { lazy, Suspense } from 'react';
import Header from './components/Header.jsx';

const TodoApp = lazy(() => import('TodoAppHost/TodoApp'));
import './style.css';

const App = () => {
  return (
    <>
      <Header />

      <div className="todo-list-container">
        <Suspense fallback={null}>
          <TodoApp />
        </Suspense>
      </div>
    </>
  );
};

export default App;
