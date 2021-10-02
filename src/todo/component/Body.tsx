import { Todo, TodoItem } from '../model/Todo';
import { useEffect, useState } from 'react';

interface Props {
  todo: Todo;
  setTodo: (todo: Todo) => void;
}

const Body = ({ todo, setTodo }: Props) => {
  const [content, setContent] = useState<string>('');
  const [updatedItemContent, setUpdatedItemContent] = useState<string>('');
  useEffect(() => {
    if (todo.todoItems.length) {
      setUpdatedItemContent(todo.todoItems[todo.todoItems.length - 1].content);
    }
  }, [todo]);

  const addTodoItem = () => {
    const lastId = todo.todoItems.length;
    const nextId = lastId ? todo.todoItems[todo.todoItems.length - 1].id + 1 : 1;
    setTodo({
      todoItems: [...todo.todoItems, { id: nextId, content: content }],
    });
    setContent('');
  };

  return (
    <>
      <div>Body</div>
      {updatedItemContent && <div>최근 업데이트된 내용 = {updatedItemContent}</div>}
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
