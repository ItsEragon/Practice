import React from 'react'

const Item = ({ foodItem }) => {
    return (
        <div>
            <li className="list-group-item">{foodItem}</li>
        </div>
    )
}

export default Item
