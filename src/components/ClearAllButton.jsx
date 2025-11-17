const ClearAllButton = ({setTodos}) => {
      const handleClearAll = () => {
        setTodos([]);
      };
    return <button onClick={handleClearAll}>clear all</button>
}
export default ClearAllButton