import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
const List = ({  todos, setTodos, item }) => {
  const handleDelete = (item) => {
    const updateTodos = todos.filter((curr) => curr !== item);
    alert(`${item} deleted`);
    setTodos(updateTodos);
  };
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white  flex justify-around items-center  h-[3rem] w-[15rem] text-2xl ">
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
};
export default List;
