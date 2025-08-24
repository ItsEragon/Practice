import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ['Dal', 'Green Vegatable', 'Roti', 'Salad', 'Milk'];

  return (
    <>
      <Container>
        <Header />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>Above is the list of healthy foods that are good for your wealth and well being.</p>
      </Container> */}
    </>
  )
}

export default App
