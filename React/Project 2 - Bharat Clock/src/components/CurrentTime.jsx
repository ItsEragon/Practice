import React from 'react'

const CurrentTime = () => {

    let time = new Date();


    // const now = new Date();
    // now.toISOString();
    return (
        <div>
            <p className='lead fw-normal'>The current date and time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
        </div>
    )
}

export default CurrentTime
