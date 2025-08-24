import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ['Dal', 'Green Vegatable', 'Roti', 'Salad', 'Milk'];

  const [textToShow, setTextToShow] = useState();

  // let textStateArr = useState('Food Item Entered by user');
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current value of textState: ${textToShow}`)

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  }

  return (
    <>
      <Container>
        <Header />
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>Above is the list of healthy foods that are good for your wealth and well being.</p>
      </Container> */}
    </>
  )
}

export default App
