import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../SingleCard/SingleCard";
import { CartImageOptions, createImageItemsArray } from "../../utils/helpers";
import { SingleButton } from "../SingleButton/SingleButton";
import {
  changeGameState,
  GameState,
  setMatchedCards,
  resetMatchedCards,
  setEndTheGame,
  setAllImages,
} from "../../redux/cardsSlice";
import { RootState } from "../../redux/rootReducer";
import { Congrats } from "../Congrats/Congrats";
import { addBestTimeItem } from "../../redux/timerSlice";
import { imgArray } from "../../utils/constants";

export function CardsContainer() {
  const dispatch = useDispatch();
  const { gameState, cards, firstCard, secondCard } = useSelector(
    (state: RootState) => state.cardsReducer,
  );
  const isRenderCards = gameState === GameState.PLAYING && !!cards.length;
  const allCartImg = cards.map((item: CartImageOptions) => (
    <SingleCard key={item.id + item.imageUrl} {...item} />
  ));
  const isMatchedCards =
    !!firstCard && !!secondCard && firstCard === secondCard;
  const isNotMatchedCards =
    !!firstCard && !!secondCard && firstCard !== secondCard;
  const isAllCompleted =
    cards.every((card) => card.isMatched) && gameState !== GameState.START;
  const isRenderCongrats = gameState === GameState.END;

  useEffect(() => {
    if (isMatchedCards) {
      setTimeout(() => {
        dispatch(setMatchedCards());
        dispatch(addBestTimeItem(Date.now() - 600));
      }, 600);
    }
    if (isNotMatchedCards) {
      setTimeout(() => {
        dispatch(resetMatchedCards());
      }, 1000);
    }
    if (isAllCompleted) {
      setTimeout(() => {
        dispatch(setEndTheGame());
      }, 1000);
    }
  }, [
    dispatch,
    firstCard,
    isMatchedCards,
    isNotMatchedCards,
    secondCard,
    isAllCompleted,
  ]);

  return (
    <div className="w-3/5 md:w-2/3 sm:w-5/6 flex items-center justify-between py-6 flex-wrap mx-auto">
      {gameState === GameState.START && (
        <SingleButton
          onButtonClick={() => {
            dispatch(changeGameState(GameState.PLAYING));
            dispatch(addBestTimeItem(Date.now()));
            dispatch(setAllImages(createImageItemsArray(imgArray)));
          }}
          extraClasses="w-full  mt-20 mx-auto text-center"
          buttonText="Let`s start"
        />
      )}
      {isRenderCards && allCartImg}
      {isRenderCongrats && <Congrats />}
    </div>
  );
}
