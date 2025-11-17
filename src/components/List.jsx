import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
const List = ({  todos, setTodos, item, key }) => {
  const handleDelete = (item) => {
    const updateTodos = todos.filter((curr) => curr !== item);
    alert(`${item} deleted`);
    setTodos(updateTodos);
  };
 const [lineThrough, setLineThrough] = useState(false)
  return (
    <div key={key} className="bg-gradient-to-r from-green-500 to-green-700 text-white  flex justify-around items-center  h-[3rem] w-[15rem] text-2xl ">
      <span className={lineThrough? `line-through` : ``}> {item}</span>
      <div className="flex gap-4">
        <button>
          <CiCircleCheck className="text-2xl" onClick={()=>setLineThrough(!lineThrough)} />
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
