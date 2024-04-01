import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { sliderImgArray } from "../../utils/constants";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Slider: React.FC = () => {
  const imagesArray = sliderImgArray.map((image) => (
    <SwiperSlide key={image}>
      <img
        className="max-h-[500px] w-full object-cover"
        src={image}
        alt={image}
      />
    </SwiperSlide>
  ));
  return (
    <div className="w-full pt-10">
      <Swiper
        effect="cube"
        modules={[EffectCube, Pagination, Autoplay]}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        grabCursor
        pagination={{
          clickable: true,
        }}
        speed={2000}
        autoplay={{
          delay: 4000,
        }}
      >
        {imagesArray}
      </Swiper>
    </div>
  );
};
