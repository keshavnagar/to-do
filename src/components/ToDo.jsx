import { useState } from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
import Header from "./Header";
import ClearAllButton from "./ClearAllButton";
const ToDo = () => {
  const todoLocalKey = `todosLocal`;
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const getTodosString = localStorage.getItem(todoLocalKey);
    const getTodos = JSON.parse(getTodosString);
    return getTodos;
  });
  const [dateTime, setDateTime] = useState("");

  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-900 w-screen h-screen flex flex-col items-center gap-[2rem]">
      <Header dateTime={dateTime} setDateTime={setDateTime} />
      <Form
        todos={todos}
        todo={todo}
        setTodo={setTodo}
        setTodos={setTodos}
        todoLocalKey={todoLocalKey}
      />
      <ListContainer
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        setTodo={setTodo}
      />
      <ClearAllButton setTodos={setTodos} />
    </section>
  );
};
export default ToDo;
