import styles from "./FoodInput.module.css"

const FoodInput = ({ handleKeyDown }) => {

    return (
        <div>
            <input
                type="text"
                placeholder="Enter food item here"
                className={styles.foodinput}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default FoodInput
