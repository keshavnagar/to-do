const Form = ({ todo, todos, setTodo, setTodos }) => {
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
  return (
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
  );
};
export default Form;
