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
  const resetGameClick = () => {
    dispatch(resetAllState(createImageItemsArray(imgArray)));
    dispatch(clearTimerState());
  };

  useEffect(() => {
    setTimeout(() => setIsShowPreloader(false), 2000);
    return () => {
      setIsShowPreloader(false);
    };
  }, []);

  return (
    <div className="App h-screen text-white overflow-x-hidden flex flex-col">
      {isShowPreloader && <Preloader />}
      {isGameStart && <Header />}
      <div className="absolute right-0 left-0 top-10 md:right-8  md:top-0 md:left-auto xl:top-7 xl:right-16">
        {isShowTimer && <Timer />}
        {isShowReset && (
          <SingleButton
            onButtonClick={resetGameClick}
            buttonText="Reset game"
            extraClasses="mt-0 text-center lg:text-right"
          />
        )}
      </div>
      <div className="container mx-auto my-0 w-5/6 px-3 h-full">
        <CardsContainer />
        {isGameStart && <Slider />}
      </div>
    </div>
  );
}

export default App;
