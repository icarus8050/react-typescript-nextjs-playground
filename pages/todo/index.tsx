import Header from '../../src/components/App/Header';
import Body from '../../src/components/App/Body';
import { useState } from 'react';
import { TodoItem } from '../../src/domain/todo/Todo';

export default function TodoApp() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  return (
    <>
      <Header />
      <Body todoItems={todoItems}
            setTodoItems={setTodoItems}
      />
    </>
  );
}
