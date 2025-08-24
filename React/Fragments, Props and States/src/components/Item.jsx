import styles from "./Item.module.css"

const Item = ({ foodItem, bought, handleBuy }) => {

    return (
        <div>
            <li className={` list-group-item ${bought && 'active'} `}>
                <span className={styles.mySpan}>{foodItem}</span>
                <button className={`${styles.button} btn btn-info`}
                    onClick={handleBuy}
                >Buy</button>
            </li>
        </div>
    )
}

export default Item
