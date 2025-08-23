import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";


function App() {

  const todoItems = [
    {
    name: 'Buy Milk',
    dueDate: '04/10/2025',
    },
    {
    name: 'Go To College',
    dueDate: '04/10/2025',
    },
    {
    name: 'Finish Assignment',
    dueDate: '04/10/2025',
    },
  ];

  return (
    <center className="todo-container">
      <Header />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App
