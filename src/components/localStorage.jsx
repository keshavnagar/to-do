

const todoLocalKey = `todosLocal`; 

export const getTodoLocal = () => {
  const getTodosString = localStorage.getItem(todoLocalKey);
  if (!getTodosString) {
    return [];
  } else {
    const getTodos = JSON.parse(getTodosString);
    return getTodos;
  }
};

export const setTodoLocal = (todos) => {
  return localStorage.setItem(todoLocalKey, JSON.stringify(todos));
};
