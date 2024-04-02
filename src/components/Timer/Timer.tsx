import { useEffect, useState } from "react";
import { GameState } from "../../redux/cardsSlice";
import { addTotalTime } from "../../redux/timerSlice";
import { TimerView } from "./TimerView";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const Timer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState<number>(0);
  const { cards, gameState } = useAppSelector((state) => state.cardsReducer);
  const isAllMatched = cards.every((item) => item.isMatched);

  useEffect(() => {
    if (isAllMatched) dispatch(addTotalTime(counter));
  }, [counter, dispatch, isAllMatched]);

  useEffect(() => {
    const baseTime = Date.now();
    let countingTime: any;
    if (gameState === GameState.START) {
      setCounter(0);
    }
    if (gameState === GameState.PLAYING) {
      countingTime = setInterval(() => {
        const differenceTime = Math.floor(Date.now() - baseTime);
        setCounter((prevState) => prevState + differenceTime);
      }, 10);
    }

    if (gameState !== GameState.PLAYING) {
      clearInterval(countingTime);
    }

    return () => {
      clearInterval(countingTime);
    };
  }, [counter, gameState]);
  return (
    <div className="mb-4">
      <TimerView counter={counter} />
    </div>
  );
};
