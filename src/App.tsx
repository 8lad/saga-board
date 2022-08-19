import "./App.scss";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto my-0 w-5/6 pt-5 px-3">
        <Header />
        <CardsContainer />
      </div>
    </div>
  );
}

export default App;
