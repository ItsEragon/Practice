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

  const defaultTodoItems = [{ name: 'Buy Ghee', dueDate: 'Today' }];

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
      <center className="todo-container">
        <Header />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <TodoItems todoItems={todoItems} onDelete={handleDelete}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App
