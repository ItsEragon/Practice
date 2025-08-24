import styles from "./Item.module.css"

const Item = ({ foodItem }) => {
    return (
        <div>
            <li className={` list-group-item`}>
                <span className={styles.mySpan}>{foodItem}</span>
                <button className={`${styles.button} btn btn-info`}
                    onClick={() => console.log(`Item being bought: ${foodItem}`)}
                >Buy</button>
            </li>
        </div>
    )
}

export default Item
