import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../SingleCard/SingleCard";
import { CartImageOptions } from "../../utils/helpers";
import { SingleButton } from "../SingleButton/SingleButton";
import { changeGameState, GameState } from "../../redux/cardsSlice";
import { RootState } from "../../redux/rootReducer";
import { Congrats } from "../Congrats/Congrats";

export function CardsContainer() {
  const dispatch = useDispatch();
  const { gameState, cards } = useSelector(
    (state: RootState) => state.cardsReducer,
  );
  const allCartImg = cards.map((item: CartImageOptions) => (
    <SingleCard key={item.id + item.imageUrl} {...item} />
  ));

  return (
    <div className="w-3/5 md:w-2/3 sm:w-5/6 flex items-center justify-between py-6 flex-wrap mx-auto">
      {gameState === GameState.START && (
        <SingleButton
          onButtonClick={() => dispatch(changeGameState(GameState.PLAYING))}
          buttonText="Let`s start"
        />
      )}
      {gameState === GameState.PLAYING && allCartImg}
      {gameState === GameState.END && <Congrats />}
    </div>
  );
}
