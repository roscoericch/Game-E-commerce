import "./Swiper.scss";
import { motion } from "framer-motion";
// Import Swiper styles
import { Products } from "../../assets/products";
import ProductsCard from "../ProductsCard/ProductsCard";
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-flip";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

const SwiperComp = ({ title, limit, decor, nav, num }) => {
  return (
    <div className={`swiper ${decor}`}>
      <div className="swiper-class">
        <div>{title}</div>
        {/* <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <HiArrowNarrowRight className="arrow-right" />
        </motion.div> */}
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={nav}
        Autoplay
        EffectFade
        spaceBetween={5}
        slidesPerView={num}
      >
        {Products.filter(
          (e, index) => index > limit[0] && index < limit[1]
        ).map((e, index) => (
          <SwiperSlide>
            <ProductsCard
              Key={e.id}
              img={e.Image}
              title={e.Name}
              classification={e.Genre}
              price={e.Price}
              id={e.id}
              category={e.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
