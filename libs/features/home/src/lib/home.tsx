// import { Route, Link } from 'react-router-dom';

import styles from './home.module.scss';
import { useState } from 'react';

interface Todo {
  title: string;
}
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' },
  ]);

  function addTodo() {
    setTodos([
      ...todos,

      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`,
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
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default Home;
