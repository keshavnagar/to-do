const todoLocalKey = `todosLocal`;

export const getTodoLocal = () => {
  const getTodosString = localStorage.getItem(todoLocalKey);
  if (!getTodosString) return [];
  return JSON.parse(getTodosString);
};

export const setTodoLocal = (todos) => {
  return localStorage.setItem(todoLocalKey, JSON.stringify(todos));
};
