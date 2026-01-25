import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }
    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle());
    }
    const handleAddition = () => {
        dispatch(
            counterActions.addition(inputElement.current.value)
        );
        inputElement.current.value = '';
    }
    const handleSubtraction = () => {
        dispatch(
            counterActions.subtraction(inputElement.current.value)
        );
        inputElement.current.value = '';
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-danger" onClick={handleDecrement}>-1</button>
                <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>Privacy Toggle</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
                <input type="text" placeholder='Enter a number' ref={inputElement} />
                <button type="button" className="btn btn-success" onClick={handleAddition}>Add</button>
                <button type="button" className="btn btn-danger" onClick={handleSubtraction} >Subtract</button>
            </div>
        </>
    )
}

export default Controls
