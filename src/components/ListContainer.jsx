import List from "./List.jsx";
const ListContainer = ({ todos, setTodos }) => {
  return (
    <section className="flex flex-col gap-2 flex-wrap">
      {todos.map((item) => {
        return (
          <List
            item={item.content}
            checked={item.checked}
            key={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </section>
  );
};
export default ListContainer;
