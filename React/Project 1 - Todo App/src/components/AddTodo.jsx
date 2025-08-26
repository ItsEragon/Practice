import { useState, useRef } from "react";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onNewItem }) {

    // const [todoName, setTodoName] = useState('');
    // const [dueDate, setDueDate] = useState('');
    // const noOfUpdates = useRef(0);

    const todoNameElement = useRef();
    const dueDateElement = useRef();

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value);
    //     noOfUpdates.current += 1;
    // };

    // const handleDateChange = (event) => {
    //     setDueDate(event.target.value);
    //     console.log(`noOfUpdates are: ${noOfUpdates.current}`);
    // };

    const handleAddButtonClick = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = '';
        dueDateElement.current.value = '';
        onNewItem(todoName, dueDate);
        // setTodoName('');
        // setDueDate('');
    }

    return (
        <div className="container text-center">
            <form className="row my-row" onSubmit={handleAddButtonClick}>
                <div className="col-6">
                    <input
                        type="text"
                        ref={todoNameElement}
                        placeholder="Enter Todo Here"
                    // value={todoName}
                    // onChange={handleNameChange}
                    />
                </div>
                <div className="col-4">
                    <input
                        type="date"
                        ref={dueDateElement}
                    // value={dueDate}
                    // onChange={handleDateChange}
                    />
                </div>
                <div className="col-2 add-btn">
                    <button
                        className="btn btn-success my-btn"
                    >
                        <MdAddTask />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;