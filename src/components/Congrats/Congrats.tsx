import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Confetti from "react-confetti";
import { SingleButton } from "../SingleButton/SingleButton";
import {
  GameState,
  setAllImages,
  changeGameState,
  resetAllState,
} from "../../redux/cardsSlice";
import { TimerView } from "../Timer/TimerView";
import { addBestTimeItem, clearTimerState } from "../../redux/timerSlice";
import {
  createImageItemsArray,
  findSmallestNumber,
  parseTime,
} from "../../utils/helpers";
import { imgArray } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const Congrats: React.FC = () => {
  const { totalTime, bestTime } = useAppSelector((state) => state.timerReducer);
  const [bestFindCards, setBestFindCards] = useState<number>(0);
  const { gameState } = useAppSelector((state) => state.cardsReducer);
  const isTotalTimeShow = gameState === GameState.END && totalTime > 0;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const bestTimePairCards: number =
      Number(parseTime(findSmallestNumber(bestTime))) / 100;
    setBestFindCards(bestTimePairCards);
  }, [bestTime, dispatch]);

  return (
    <div className="w-full mx-auto text-center pt-20">
      <Confetti />
      <h1 className="text-4xl">{t("title.congratulations")}</h1>
      {isTotalTimeShow && (
        <div>
          <h2 className="mb-2 pt-4 text-2xl">{t("title.game-time")} </h2>
          <TimerView counter={totalTime} />
        </div>
      )}
      {!!bestFindCards && (
        <div>
          <h2 className="mb-2 pt-8 text-2xl">
            {t("title.best-tipe-pair")} {bestFindCards} {t("measure.seconds")}
          </h2>
        </div>
      )}
      <SingleButton
        onButtonClick={() => {
          dispatch(clearTimerState());
          dispatch(changeGameState(GameState.PLAYING));
          dispatch(addBestTimeItem(Date.now()));
          dispatch(setAllImages(createImageItemsArray(imgArray)));
        }}
        buttonText={t("button.play-again")}
        extraClasses="w-full  mt-20 mx-auto text-center"
      />
      <SingleButton
        onButtonClick={() => {
          dispatch(resetAllState(createImageItemsArray(imgArray)));
          dispatch(clearTimerState());
        }}
        buttonText={t("button.go-back")}
        extraClasses="w-full  mt-20 mx-auto text-center"
      />
    </div>
  );
};
