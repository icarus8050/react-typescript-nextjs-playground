import Hello from '../../src/todo/component/Header';
import Body from '../../src/todo/component/Body';
import { useState } from 'react';
import { Todo } from '../../src/todo/model/Todo';

export default function TodoApp() {
  const [todo, setTodo] = useState<Todo>({ todoItems: [] });

  return (
    <>
      <Hello />
      <Body todo={todo}
            setTodo={setTodo}
      />
    </>
  );
}
