import "./App.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Header } from "./components/Header/Header";
import { GameState, resetAllState } from "./redux/cardsSlice";
import { imgArray } from "./utils/constants";
import { Timer } from "./components/Timer/Timer";
import { RootState } from "./redux/rootReducer";
import { SingleButton } from "./components/SingleButton/SingleButton";
import { clearTimerState } from "./redux/timerSlice";
import { createImageItemsArray } from "./utils/helpers";
import { Slider } from "./components/Slider/Slider";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const dispatch = useDispatch();
  const [isShowPreloader, setIsShowPreloader] = useState<boolean>(true);
  const { gameState } = useSelector((state: RootState) => state.cardsReducer);
  const isShowTimer = gameState === GameState.PLAYING;
  const isGameStart = gameState === GameState.START;
  const isShowReset = gameState === GameState.PLAYING;

  useEffect(() => {
    setTimeout(() => setIsShowPreloader(false), 2000);
    return () => {
      setIsShowPreloader(false);
    };
  }, []);

  return (
    <div className="App ">
      {isShowPreloader && <Preloader />}
      {isGameStart && <Header />}
      {isShowTimer && <Timer />}
      {isShowReset && (
        <SingleButton
          onButtonClick={() => {
            dispatch(resetAllState(createImageItemsArray(imgArray)));
            dispatch(clearTimerState());
          }}
          buttonText="Reset game"
          extraClasses="w-1/6 absolute right-6 top-20 mt-0 text-right"
        />
      )}
      <div className="container mx-auto my-0 w-5/6 px-3">
        <CardsContainer />
      </div>
      {isGameStart && <Slider />}
    </div>
  );
}

export default App;
