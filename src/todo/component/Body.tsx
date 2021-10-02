import { Todo, TodoItem } from '../model/Todo';
import { useState } from 'react';

interface Props {
  todo: Todo;
  setTodo: (todo: Todo) => void;
}

const Body = ({ todo, setTodo }: Props) => {
  const [content, setContent] = useState<string>('');

  const addTodoItem = () => {
    const nextId = todo.todoItems[todo.todoItems.length - 1].id + 1;
    setTodo({
      todoItems: [...todo.todoItems, { id: nextId, content: content }],
    });
    setContent('');
  };

  return (
    <>
      <div>Body</div>
      <input type='text' value={content} onChange={event => {
        setContent(event.target.value);
      }} />
      <button onClick={addTodoItem}>추가</button>
      <hr />
      {
        todo.todoItems.map((it: TodoItem) => {
          return <li key={it.id}>{it.content}</li>;
        })
      }
    </>
  );
};

export default Body;
