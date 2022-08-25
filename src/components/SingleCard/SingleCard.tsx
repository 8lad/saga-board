import { useDispatch } from "react-redux";
import clsx from "clsx";
import { setMatchData } from "../../redux/cardsSlice";
import { CartImageOptions } from "../../utils/helpers";
import "./SingleCard.scss";

const SingleCard: React.FC<CartImageOptions> = ({
  id,
  imageUrl,
  isMatched,
  isRotated,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={clsx("cardbox", (isRotated || isMatched) && "active")}
      onClick={() => dispatch(setMatchData({ imageUrl, id }))}
    >
      <div className="card card--bg">
        <div
          className={clsx("card-back", isMatched && "card-back--matched")}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
    </div>
  );
};

export default SingleCard;
