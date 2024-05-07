import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export const Provider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Bring 6 Eggs", completed: "false" },
  ]);

  const addTodo = (todo) => {};

  const updateTodo = (id, todo) => {};

  const deleteTodo = (id) => {};

  const toggleComplete = (id) => {};

  const valueToShare = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
  };

  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
};

export function useTodo() {
  return useContext(TodosContext);
}
