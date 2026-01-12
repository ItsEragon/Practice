import React from 'react'

const WelcomeMessage = ({ onGetPostsClick }) => {
    return (
        <div>
            <center className='welcome-message'>
                <h1>There are no posts</h1>
                <button type="submit"
                    onClick={onGetPostsClick}
                    className="btn btn-primary">Get Posts From Server</button>
            </center>
        </div>
    )
}

export default WelcomeMessage
