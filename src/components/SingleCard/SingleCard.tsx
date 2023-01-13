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
      <div className="card card--bg w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
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
