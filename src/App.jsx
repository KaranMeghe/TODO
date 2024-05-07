import { useTodo } from "./contexts/TodoContext";

function App() {
  const { todos } = useTodo();
  return (
    <>
      <h1 className="text-green-8000">{todos[0].todo}</h1>
    </>
  );
}

export default App;
