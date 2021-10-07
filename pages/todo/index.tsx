import Hello from '../../src/components/Header';
import Body from '../../src/components/Body';
import { useState } from 'react';
import { TodoItem } from '../../src/domain/todo/Todo';

export default function TodoApp() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  return (
    <>
      <Hello />
      <Body todoItems={todoItems}
            setTodoItems={setTodoItems}
      />
    </>
  );
}
