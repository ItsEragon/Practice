import styles from "./FoodInput.module.css"

const FoodInput = ({ handleOnChange }) => {

    return (
        <div>
            <input
                type="text"
                placeholder="Enter food item here"
                className={styles.foodinput}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default FoodInput
