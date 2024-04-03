import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { Header } from "./components/Header/Header";
import { GameState, resetAllState } from "./redux/cardsSlice";
import { imgArray, MIN_SCREEN_SIZE } from "./utils/constants";
import { Timer } from "./components/Timer/Timer";
import { SingleButton } from "./components/SingleButton/SingleButton";
import { clearTimerState } from "./redux/timerSlice";
import { createImageItemsArray } from "./utils/helpers";
import { Slider } from "./components/Slider/Slider";
import Preloader from "./components/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { useScreenSize } from "./hooks/useScreenSize";
import { SmallScreenNotification } from "./components/SmallScreenNotification/SmallScreenNotification";

function App() {
  const dispatch = useAppDispatch();
  const [isShowPreloader, setIsShowPreloader] = useState<boolean>(true);
  const { gameState } = useAppSelector((state) => state.cardsReducer);
  const isShowTimer = gameState === GameState.PLAYING;
  const isGameStart = gameState === GameState.START;
  const isShowReset = gameState === GameState.PLAYING;
  const resetGameClick = () => {
    dispatch(resetAllState(createImageItemsArray(imgArray)));
    dispatch(clearTimerState());
  };
  const { t } = useTranslation();

  const { width } = useScreenSize();

  useEffect(() => {
    setTimeout(() => setIsShowPreloader(false), 2000);
    const { language } = navigator;
    localStorage.setItem("i18nextLng", language);
    return () => {
      setIsShowPreloader(false);
    };
  }, []);

  const isSmallScreen = width < MIN_SCREEN_SIZE;

  if (!isShowPreloader && isSmallScreen) {
    return <SmallScreenNotification />;
  }

  return (
    <div className="App h-screen text-white overflow-x-hidden flex flex-col">
      {isShowPreloader && <Preloader />}
      {isGameStart && <Header />}
      <div className="absolute right-0 left-0 top-10 md:right-8  md:top-0 md:left-auto xl:top-7 xl:right-16">
        {isShowTimer && <Timer />}
        {isShowReset && (
          <SingleButton
            onButtonClick={resetGameClick}
            buttonText={t("button.reset")}
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
