import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {

  const [calValue, setCalValue] = useState('');

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalValue('');
    } else if (buttonText === '=') {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calValue} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  )
}

export default App
