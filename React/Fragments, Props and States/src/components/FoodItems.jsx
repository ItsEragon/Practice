
import Item from './Item';

const FoodItems = ({ items }) => {

    return (
        <div>
            <ul className="list-group">
                {items.map(item =>
                    <Item
                        key={item}
                        foodItem={item}
                        handleBuy={() => console.log(`${item} bought`)}
                    ></Item>)}
            </ul>
        </div>
    )
}

export default FoodItems
