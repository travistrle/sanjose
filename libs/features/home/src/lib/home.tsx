import React from 'react';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import styles from './home.module.scss';

const todoQuery = gql`
  query {
    todos {
      id
      task
    }
  }
`;

interface Todo {
  id: number;
  task: string;
}

interface TodoData {
  todos: Todo[];
}

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: 'Todo 1' },
    { id: 2, task: 'Todo 2' },
  ]);

  const { client, loading, data } = useQuery<TodoData>(
    todoQuery,

    { fetchPolicy: 'network-only' }
  );

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
      <ul>
        {data?.todos?.map((t) => (
          <li className="todo" key={t.id}>
            {t.task}
          </li>
        ))}
      </ul>
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default Home;
