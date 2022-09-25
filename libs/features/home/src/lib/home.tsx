// import { Route, Link } from 'react-router-dom';

import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

interface Todo {
  id: number;
  task: string;
}
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: 'Todo 1' },
    { id: 2, task: 'Todo 2' },
  ]);

  const headers = {
    Authorization: '',
  };

  useEffect(() => {
    const id_token = localStorage.getItem('id_token');
    headers['Authorization'] = `Bearer ${id_token}`;
    fetch('/api/todos', { headers: headers })
      .then((_) => _.json())

      .then(setTodos);
  }, []);

  function addTodo() {
    setTodos([
      ...todos,

      {
        id: Math.random() + 3,
        task: `New todo ${Math.floor(Math.random() * 1000)}`,
      },
    ]);
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to FeaturesHome!</h1>

      {/* <ul>
        <li><Link to="/">features-home root</Link></li>
      </ul> */}
      {/* <Route
        path="/"
        element={<div>This is the features-home root route.</div>}
      /> */}
      <ul>
        {todos.map((t) => (
          <li className={'todo'} key={t.id}>
            {t.task}
          </li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default Home;
