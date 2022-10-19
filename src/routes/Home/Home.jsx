import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import LargeCard from "../../components/LargeCard/LargeCard";
import { Products, Recommended } from "../../assets/products";
import { Button } from "@mui/material";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
const Home = () => {
  return (
    <div className="home-container">
      <h3 className="classification">Your one stop online Gamestore</h3>
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
          <SwiperSlide>
            <LargeCard
              img="https://i.ibb.co/4fqbt9h/4x-J8-XB3bi888-QTLZYdl7-Oi0s.jpg"
              id="featured1"
              title="God Of War"
              classification="adventure"
              price={110}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LargeCard
              img="https://i.ibb.co/gwkBPDP/b-F1qm-EL5-RM6a-Mf-L0o-Lcx-Re8-B.jpg"
              id="featuredIV"
              title="Mortal Kombat"
              classification="adventure"
              price={80}
            />
          </SwiperSlide>
          <SwiperSlide>
            <LargeCard
              img="https://i.ibb.co/G7Fz9m6/a3a-Wk7-Rdt8-Lod5-GHVwj-SA8-BW.jpg"
              id="featuredV"
              title="SteelRising"
              classification="adventure"
              price={80}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-class">
        <LargeCard
          img="https://i.ibb.co/4fqbt9h/4x-J8-XB3bi888-QTLZYdl7-Oi0s.jpg"
          id="featured1"
          title="God Of War"
          classification="adventure"
          price={110}
        />
        <LargeCard
          img="https://i.ibb.co/gwkBPDP/b-F1qm-EL5-RM6a-Mf-L0o-Lcx-Re8-B.jpg"
          id="featuredIV"
          title="Mortal Kombat"
          classification="adventure"
          price={80}
        />
        <LargeCard
          img="https://i.ibb.co/G7Fz9m6/a3a-Wk7-Rdt8-Lod5-GHVwj-SA8-BW.jpg"
          id="featuredV"
          title="SteelRising"
          classification="adventure"
          price={80}
        />
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
      <div className="section">
        {Products.filter((e, index) => index < 4).map((e, index) => (
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
      <div className="bg-class">
        {Products.filter((e, index) => index >= 12).map((e) => (
          <LargeCard
            key={e.id}
            img={e.Image}
            id={e.id}
            title={e.Name}
            classification={e.category}
            price={e.Price}
          />
        ))}
      </div>
      <LargeCard
        img="https://i.ibb.co/qYNvWw3/Mkbq-F5ve-MFZnm-QRtsbm-Qo-NZT.jpg"
        id="featured2"
        title="FIFA 23"
        classification="adventure"
        price={150}
      />
      <LargeCard
        img="https://i.ibb.co/4Wy8ZrX/78-A5-Nw4-Nqv-AVj0z04-ZW3lr-ZJ.jpg"
        id="featured2"
        title="Call of duty"
        classification="adventure"
        price={180}
      />
      <div className="swiper">
        <div className="swiper-class">
          <div>Recommended</div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <HiArrowNarrowRight className="arrow-right" />
          </motion.div>
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
      <div className="swiper">
        <div className="swiper-class">
          <div>RATED</div>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <HiArrowNarrowRight className="arrow-right" />
          </motion.div>
        </div>
        <Swiper Autoplay EffectFade spaceBetween={50} slidesPerView={3}>
          {Products.filter((e, index) => index > 7 && index < 20).map(
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
