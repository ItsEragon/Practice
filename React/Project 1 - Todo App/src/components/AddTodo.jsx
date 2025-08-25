import { useState } from "react";

function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleAddButtonClick = () => {
        onNewItem(todoName, dueDate);
        setTodoName('');
        setDueDate('');
    }

    return (
        <div className="container text-center">
            <div className="row my-row">
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
                        type="button"
                        className="btn btn-success my-btn"
                        onClick={handleAddButtonClick}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;