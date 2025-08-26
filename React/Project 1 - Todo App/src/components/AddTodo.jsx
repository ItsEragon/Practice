import { useState } from "react";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleAddButtonClick = (event) => {
        event.preventDefault();
        onNewItem(todoName, dueDate);
        setTodoName('');
        setDueDate('');
    }

    return (
        <div className="container text-center">
            <form className="row my-row" onSubmit={handleAddButtonClick}>
                <div className="col-6">
                    <input
                        type="text"
                        placeholder="Enter Todo Here"
                        value={todoName}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="col-4">
                    <input
                        type="date"
                        value={dueDate}
                        onChange={handleDateChange}
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