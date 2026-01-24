import React from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' });
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-danger" onClick={handleDecrement}>-1</button>
                {/* <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button> */}
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                <input type="text" placeholder='Enter a number' />
                <button type="button" className="btn btn-success">Add</button>
                <button type="button" className="btn btn-danger" >Subtract</button>
            </div>
        </>
    )
}

export default Controls
