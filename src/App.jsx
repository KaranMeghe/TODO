import { useEffect } from "react";
import TodoForm from "./contexts/Components/ToDoFormui";
import TodoItem from "./contexts/Components/ToDoItem";
import { useTodo } from "./contexts/TodoContext";

function App() {
  const { todos, setTodos } = useTodo();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) {
      return setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-col flex-wrap gap-y-3">
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
