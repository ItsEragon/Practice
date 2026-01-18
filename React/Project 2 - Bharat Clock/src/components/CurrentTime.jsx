import React, { useEffect, useState } from 'react'

const CurrentTime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    // const now = new Date();
    // now.toISOString();
    return (
        <div>
            <p className='lead fw-normal'>The current date and time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
        </div>
    )
}

export default CurrentTime
