import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem"
import { TodoItemsContext } from '../store/todo-items-store'
import { useContext } from 'react'


const TodoItems = () => {

  const { todoItems } = useContext(TodoItemsContext);


  return (
    <div>

      <div className={styles.itemsContainer}>
        {todoItems.map(item =>
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          >
          </TodoItem>
        )}
      </div>
    </div>
  )
}

export default TodoItems
