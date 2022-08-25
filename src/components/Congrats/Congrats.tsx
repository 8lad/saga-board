import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { SingleButton } from "../SingleButton/SingleButton";
import { resetAllState } from "../../redux/cardsSlice";

export const Congrats: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full mx-auto text-center pt-20">
      <Confetti />
      <h1 className="text-4xl">Congratulations 😄 You are the winner</h1>
      <SingleButton
        onButtonClick={() => dispatch(resetAllState())}
        buttonText="Let`s play again"
      />
    </div>
  );
};
