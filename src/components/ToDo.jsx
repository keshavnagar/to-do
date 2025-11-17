import { useEffect, useState } from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
import Header from "./Header";
import ClearAllButton from "./ClearAllButton";
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate}-${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-900 w-screen h-screen flex flex-col items-center gap-[2rem]">
      <Header dateTime={dateTime} />
      <Form todos={todos} todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <ListContainer todos={todos} setTodos={setTodos} />
      <ClearAllButton setTodos={setTodos} />
    </section>
  );
};
export default ToDo;
