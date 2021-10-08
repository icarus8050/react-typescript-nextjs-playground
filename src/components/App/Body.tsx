import { useEffect, useState } from 'react';
import { TodoItem } from '../../domain/todo/Todo';

interface Props {
  todoItems: TodoItem[];
  setTodoItems: (todoItems: TodoItem[]) => void;
}

const Body = ({ todoItems, setTodoItems }: Props) => {
  const [content, setContent] = useState<string>('');
  const [updatedItemContent, setUpdatedItemContent] = useState<string>('');
  useEffect(() => {
    if (todoItems.length) {
      setUpdatedItemContent(todoItems[todoItems.length - 1].content);
    }
  }, [todoItems]);

  const addTodoItem = () => {
    const lastId = todoItems.length;
    const nextId = lastId ? todoItems[todoItems.length - 1].id + 1 : 1;
    setTodoItems(
      [...todoItems, { id: nextId, content: content, done: false }],
    );
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
        todoItems.map((it: TodoItem) => {
          return <li key={it.id}>{it.content}</li>;
        })
      }
    </>
  );
};

export default Body;
