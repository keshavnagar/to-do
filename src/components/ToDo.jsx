const ToDo = () => {
  return (
    <section className="bg-red-200 w-screen h-screen">
      <header>
        <h1>ToDo List</h1>
        {/* <Date/> */}
      </header>
      <section  >
        <form>
          <div>
            <input type="text" autoComplete="off" />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>
    </section>
  );
};
export default ToDo;
