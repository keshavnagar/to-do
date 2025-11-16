import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleTodos = (e) => {
    e.preventDefault();
    if (!todo) return;
    if (todos.includes(todo)) {
      alert(`${todo} is already there`);
      setTodo(""); //for clear the value from the input , because the vaalue of input is state
      return;
    }
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  }, 1000);

  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-900 w-screen h-screen flex flex-col items-center gap-[2rem]">
      <header className="mt-[10rem]">
        <h1 className="text-3xl font-bold text-green-200">ToDo List</h1>
        <h2>{dateTime}</h2>
      </header>
      <section>
        <form onSubmit={handleTodos} className="flex font-medium">
          <div>
            {/* <input className="bg-gradient-to-r from-green-100 to-green-400 p-2 rounded-full placeholder-gray-600 focus:placeholder-green-500" placeholder="enter task" type="text" autoComplete="off" /> */}
            <input
              className="bg-gradient-to-r from-green-100 to-green-400 p-2  placeholder-green-700 text-2xl outline-none"
              placeholder="enter task"
              type="text"
              autoComplete="off"
              value={todo}
              onChange={(e) => {
                handleTodo(e);
              }}
            />
          </div>
          <div>
            <button
              className="text-2xl p-2 bg-gradient-to-r from-green-500 to-green-700 text-green-200 bg-gradient-to-r hover:from-green-100 hover:to-green-300 hover:text-green-800"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </section>
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
                  <CiCircleRemove className="text-2xl" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
export default ToDo;
