const ToDo = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-900 w-screen h-screen flex flex-col items-center gap-[2rem]">
      <header className="mt-[10rem]">
        <h1 className="text-3xl font-bold text-green-200">ToDo List</h1>
        {/* <Date/> */}
      </header>
      <section>
        <form className="flex font-medium">
          <div>
            {/* <input className="bg-gradient-to-r from-green-100 to-green-400 p-2 rounded-full placeholder-gray-600 focus:placeholder-green-500" placeholder="enter task" type="text" autoComplete="off" /> */}
            <input
              className="bg-gradient-to-r from-green-100 to-green-400 p-2  placeholder-green-700 text-2xl outline-none"
              placeholder="enter task"
              type="text"
              autoComplete="off"
            />
          </div>
          <div>
            <button  className="text-2xl p-2 bg-gradient-to-r from-green-500 to-green-700 text-green-200" type="submit">Add Task</button>
          </div>
        </form>
      </section>
    </section>
  );
};
export default ToDo;
