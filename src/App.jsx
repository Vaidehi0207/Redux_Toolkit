import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"; // Ensure this matches the file name exactly

function App() {
  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
