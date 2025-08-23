import React from 'react'
import Item from './Item';

const FoodItems = ({ items }) => {

    return (
        <div>
            <ul className="list-group">
                {items.map(item => <Item key={item} foodItem={item}></Item>)}
            </ul>
        </div>
    )
}

export default FoodItems
