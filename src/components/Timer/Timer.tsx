import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GameState } from "../../redux/cardsSlice";
import { RootState } from "../../redux/rootReducer";
import { addTotalTime } from "../../redux/timerSlice";
import { TimerView } from "./TimerView";

export const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState<number>(0);
  const { cards, gameState } = useSelector(
    (state: RootState) => state.cardsReducer,
  );
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
    <div className="absolute right-7 top-7">
      <TimerView counter={counter} />
    </div>
  );
};
