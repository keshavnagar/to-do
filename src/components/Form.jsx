const Form = ({ todo, todos, setTodo, setTodos }) => {
  const handleTodo = (e) => {
    setTodo({ id: e.target.value, content: e.target.value, checked: false });
  };
  const handleTodos = (e) => {
    e.preventDefault();
    if (!todo.content.trim()) {
      alert("enter any task, than submit")
      return;
    }
    const exist = todos.some((curr) => {
      return curr.id === todo.id && curr.content === todo.content;
    });
    if (exist) {
      alert(`${todo.content} is already there`);
       setTodo({ id: todo.id, content: "", checked: false }); //for clear the value from the input , because the vaalue of input is state
      return;
    }
    // if (todos.includes(todo.id)) {
    //   alert(`${todo.content} is already there`);
    //   setTodo({}); //for clear the value from the input , because the vaalue of input is state
    //   return;
    // }
    setTodos((prev) => [
      ...prev,
      { id: todo.id, content: todo.content, checked: todo.checked },
    ]);
    setTodo({ id: todo.id, content: "", checked: false });
  };
  return (
    <section>
      <form onSubmit={handleTodos} className="flex font-medium">
        <div>
          {/* <input className="bg-gradient-to-r from-green-100 to-green-400 p-2 rounded-full placeholder-gray-600 focus:placeholder-green-500" placeholder="enter task" type="text" autoComplete="off" /> */}
          <input
            className="bg-gradient-to-r from-green-100 to-green-400 p-2  placeholder-green-700 text-2xl outline-none"
            placeholder={`enter task`}
            type="text"
            autoComplete="off"
            value={todo.content}
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
