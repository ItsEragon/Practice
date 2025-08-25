import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <div>

      <div className={styles.itemsContainer}>
        {todoItems.map(item =>
          <TodoItem
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
