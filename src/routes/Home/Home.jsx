import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Products, Recommended } from "../../assets/products";
import { Button } from "@mui/material";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
const Home = () => {
  return (
    <div className="home-container">
      <h3 className="classification">Your one stop online Gamestore</h3>
      <div className="latest-Game">
        <img src="https:gdurl.com/EO6F/download" className="lg-img" />
        <div className="content">
          <h2>GOD OF WAR</h2>
          <h3>"PARADISE"</h3>
          <span>God Of War is an adventrous,</span>
          <span>Bloody game another epic</span>
          <span>story line from sony</span>
          <Button variant="contained" color="success" className="btn">
            Play Now
          </Button>
        </div>
      </div>
      <div className="swiper">
        <div className="swiper-class">
          <div>New</div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <HiArrowNarrowRight className="arrow-right" />
          </motion.div>
        </div>
        <Swiper Autoplay EffectFade spaceBetween={50} slidesPerView={3}>
          {Products.filter((e, index) => index > 30).map((e, index) => (
            <SwiperSlide>
              <ProductsCard
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
      {Products.filter((e, index) => index < 4).map((e, index) => (
        <ProductsCard
          Key={e.id}
          img={e.Image}
          title={e.Name}
          classification={e.Genre}
          price={e.Price}
          id={e.id}
        />
      ))}
      <div className="recommended-Game">
        <img src="https:gdurl.com/83sT" className="lg-img" />
        <div className="content">
          <h2>SLAY MAMAKE</h2>
          <h3>"HABVIC"</h3>
          <span>slay mamake is an adventrous,</span>
          <span>exciting game another epic</span>
          <span>story line from sony</span>
          <Button variant="contained" color="success" className="btn">
            Explore
          </Button>
        </div>
      </div>
      <div className="swiper">
        <div className="swiper-class">
          <div>Recommended</div>
        </div>
        <Swiper Autoplay EffectFade spaceBetween={50} slidesPerView={3}>
          {Products.filter((e, index) => index > 20 && index < 30).map(
            (e, index) => (
              <SwiperSlide>
                <ProductsCard
                  Key={e.id}
                  img={e.Image}
                  title={e.Name}
                  classification={e.Genre}
                  price={e.Price}
                  id={e.id}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
