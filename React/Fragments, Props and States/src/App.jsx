import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ['Dal', 'Green Vegatable', 'Roti', 'Salad', 'Milk'];

  let textToShow = 'Food Item Entered by user';

  const handleOnChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Container>
        <Header />
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>Above is the list of healthy foods that are good for your wealth and well being.</p>
      </Container> */}
    </>
  )
}

export default App
