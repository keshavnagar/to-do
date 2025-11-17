import { useEffect, useState } from "react";
import Form from "./Form";
import ListContainer from "./ListContainer";
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleClearAll = (e) => {
    setTodos([]);
  };
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
      <header className="mt-[10rem]">
        <h1 className="text-3xl font-bold text-green-200">ToDo List</h1>
        <h2>{dateTime}</h2>
      </header>
      <Form todos={todos} todo={todo} setTodo={setTodo} setTodos={setTodos} />
      <ListContainer todos={todos} setTodos={setTodos} />
      <button onClick={handleClearAll}>clear all</button>
    </section>
  );
};
export default ToDo;
