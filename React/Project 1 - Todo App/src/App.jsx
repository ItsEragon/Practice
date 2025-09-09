import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";


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

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }


  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <Header />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App
