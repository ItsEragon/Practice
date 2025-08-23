import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem"

const TodoItems = ({todoItems}) => {
  return (
    <div>
      
      <div className={styles.itemsContainer}>
        {todoItems.map(item => <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>)}
      </div>
    </div>
  )
}

export default TodoItems
