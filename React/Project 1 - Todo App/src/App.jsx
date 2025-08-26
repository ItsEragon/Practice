import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {

  // const initialTodoItems = [
  //   {
  //     name: 'Buy Milk',
  //     dueDate: '04/10/2025',
  //   },
  //   {
  //     name: 'Go To College',
  //     dueDate: '04/10/2025',
  //   },
  //   {
  //     name: 'Finish Assignment',
  //     dueDate: '04/10/2025',
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <Header />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDelete={handleDelete}></TodoItems>
    </center>
  );
}

export default App
