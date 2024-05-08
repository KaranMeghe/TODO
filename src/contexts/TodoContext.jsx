import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

export const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Create/Add Todo
  const addTodo = (todo) => {
    const updatedTodo = [
      ...todos,
      { id: Date.now(), todo, completed: false } /*, completed: "false" */,
    ];

    if (todo) {
      setTodos(updatedTodo);
    }
    console.log(todos);
    return todos;
  };

  // UpdateToDo
  const updateTodo = (id, todoUpdate) => {
    const updateToDo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: todoUpdate };
      }
      return todo;
    });
    setTodos(updateToDo);
  };

  // Delete Todos
  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodo);
  };

  // checkmark
  const toggleComplete = (id) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const valueToShare = {
    todos,
    setTodos,
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
