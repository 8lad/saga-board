import { Carousel } from "3d-react-carousal";
import { sliderImgArray } from "../../utils/constants";
import "./Slider.scss";

export const Slider = () => {
  const imgsArr = sliderImgArray.map((image) => (
    <img className="slider__img" src={image} alt={image} />
  ));
  return (
    <div className="w-full overflow-hidden pt-10">
      <Carousel slides={imgsArr} autoplay interval={3000} arrows={false} />
    </div>
  );
};
