import "./Swiper.scss";
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LargeCard from "../LargeCard/LargeCard";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-flip";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

const SwiperMobile = ({ prod1, prod2, prod3 }) => {
  return (
    <div className="swiper sm-class">
      <Swiper
        modules={[Pagination, EffectFlip, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="flip"
        pagination={true}
        spaceBetween={30}
      >
        <SwiperSlide>
          <LargeCard
            img={prod1.img}
            id={prod1.id}
            title={prod1.title}
            classification={prod1.classification}
            price={prod1.price}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LargeCard
            img={prod2.img}
            id={prod2.id}
            title={prod2.title}
            classification={prod2.classification}
            price={prod2.price}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LargeCard
            img={prod3.img}
            id={prod3.id}
            title={prod3.title}
            classification={prod3.classification}
            price={prod3.price}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperMobile;
