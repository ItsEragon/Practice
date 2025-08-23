import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";

function App() {
  // let foodItems = [];
  let foodItems = ['Dal', 'Green Vegatable', 'Roti', 'Salad', 'Milk'];

  return (
    <>
      <Header />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  )
}

export default App
