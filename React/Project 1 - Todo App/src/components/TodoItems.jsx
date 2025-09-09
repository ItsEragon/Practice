import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem"
import { TodoItemsContext } from '../store/todo-items-store'
import { useContext } from 'react'


const TodoItems = ({ onDelete }) => {

  const todoItems = useContext(TodoItemsContext);


  return (
    <div>

      <div className={styles.itemsContainer}>
        {todoItems.map(item =>
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDelete={onDelete}>
          </TodoItem>
        )}
      </div>
    </div>
  )
}

export default TodoItems
