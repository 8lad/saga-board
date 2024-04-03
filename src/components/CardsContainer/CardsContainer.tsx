import { useEffect } from "react";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";
import SingleCard from "../SingleCard/SingleCard";
import { SingleButton } from "../SingleButton/SingleButton";
import {
  changeGameState,
  GameState,
  setMatchedCards,
  resetMatchedCards,
  setEndTheGame,
  setAllImages,
} from "../../redux/cardsSlice";
import { Congrats } from "../Congrats/Congrats";
import { CartImageOptions, createImageItemsArray } from "../../utils/helpers";
import { addBestTimeItem } from "../../redux/timerSlice";
import { imgArray } from "../../utils/constants";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export function CardsContainer() {
  const dispatch = useAppDispatch();
  const { gameState, cards, firstCard, secondCard } = useAppSelector(
    (state) => state.cardsReducer,
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

  const startGameClick = () => {
    dispatch(changeGameState(GameState.PLAYING));
    dispatch(addBestTimeItem(Date.now()));
    dispatch(setAllImages(createImageItemsArray(imgArray)));
  };

  const cardsContainerClasses = clsx(
    "grid grid-cols-big-screen gap-6 justify-items-center items-center content-center justify-center py-6 mx-auto ",
    (isRenderCards || isRenderCongrats) && "h-full",
  );

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

  const { t } = useTranslation();

  if (isRenderCongrats) {
    return <Congrats />;
  }

  return (
    <>
      {gameState === GameState.START && (
        <SingleButton
          onButtonClick={startGameClick}
          extraClasses="w-full mt-10 mx-auto text-center"
          buttonText={t("button.start")}
        />
      )}
      {isRenderCards && (
        <div className={cardsContainerClasses}>{allCartImg}</div>
      )}
    </>
  );
}
