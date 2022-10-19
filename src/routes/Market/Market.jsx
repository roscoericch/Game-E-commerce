import "./Market.scss";
import XXLargeCard from "../../components/XXLargeCard/XXLargeCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import { Market } from "../../assets/products";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
const MarketPage = () => {
  return (
    <div className="market-container">
      <div className="swiper">
        <Swiper
          modules={[Pagination, EffectFade, Autoplay]}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          pagination={true}
          spaceBetween={30}
        >
          {Market.filter((e, index) => index < 3).map((e, index) => (
            <SwiperSlide>
              <XXLargeCard
                Key={e.id}
                img={e.Image}
                title={e.Name}
                classification={e.Genre}
                price={e.Price}
                id={e.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {Market.filter((e, index) => index >= 3).map((e) => (
        <MediumCard
          Key={e.id}
          img={e.Image}
          title={e.Name}
          classification={e.Genre}
          price={e.Price}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default MarketPage;
