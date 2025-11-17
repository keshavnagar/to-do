import { useEffect, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import Form from "./Form";
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState("");
 
  const handleDelete = (item) => {
    const updateTodos = todos.filter((curr) => curr !== item);
    alert(`${item} deleted`);
    setTodos(updateTodos);
  };
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
      <section className="flex flex-col gap-2 flex-wrap">
        {todos.map((item) => {
          return (
            <div
              key={item}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white  flex justify-around items-center  h-[3rem] w-[15rem] text-2xl "
            >
              <span className="mb-1"> {item}</span>
              <div className="flex gap-4">
                <button>
                  <CiCircleCheck className="text-2xl" />
                </button>
                <button>
                  <CiCircleRemove
                    onClick={() => handleDelete(item)}
                    className="text-2xl"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <button onClick={handleClearAll}>clear all</button>
    </section>
  );
};
export default ToDo;
