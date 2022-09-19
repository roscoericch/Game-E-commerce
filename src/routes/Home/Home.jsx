import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import { Products, Recommended } from "../../assets/products";
import { Button } from "@mui/material";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { addItemToCart } from "../../store/Cart/cart.Action";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
const Home = () => {
  const cartItem = useSelector(selectCartItem);
  const dispatch = useDispatch();
  const addToCart = (Product) => dispatch(addItemToCart(cartItem, Product));
  return (
    <div className="home-container">
      <h3 className="classification">Your one stop online Gamestore</h3>
      <div className="latest-Game">
        <img
          className="lg-img"
          src="https://i.ibb.co/4fqbt9h/4x-J8-XB3bi888-QTLZYdl7-Oi0s.jpg"
          alt="4x-J8-XB3bi888-QTLZYdl7-Oi0s"
          border="0"
        />

        <div className="tag">
          Featured <AiFillStar className="star" />
        </div>
        <div className="content">
          <h2>GOD OF WAR</h2>
          <h3>"PARADISE"</h3>
          <span>God Of War is an adventrous,</span>
          <span>Bloody game another epic</span>
          <span>story line from sony</span>
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              addToCart({
                id: "featured1",
                img: "https://i.ibb.co/4fqbt9h/4x-J8-XB3bi888-QTLZYdl7-Oi0s.jpg",
                title: "God Of War",
                price: 40,
              })
            }
            className="btn"
          >
            add to cart
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
      <div className="latest-Game">
        <img
          src="https://i.ibb.co/qYNvWw3/Mkbq-F5ve-MFZnm-QRtsbm-Qo-NZT.jpg"
          className="lg-img"
        />
        <div className="tag">
          Featured <AiFillStar className="star" />
        </div>
        <div className="content">
          <h2>FIFA 23</h2>
          <span>from EA SPORTS</span>
          <Button variant="contained" color="success" className="btn">
            add to cart
          </Button>
        </div>
      </div>
      <div className="latest-Game">
        <img
          src="https://i.ibb.co/4Wy8ZrX/78-A5-Nw4-Nqv-AVj0z04-ZW3lr-ZJ.jpg"
          className="lg-img"
        />
        <div className="tag">
          Featured <AiFillStar className="star" />
        </div>
        <div className="content">
          <h2>CALL OF DUTY</h2>
          <h3>"LAST STAND"</h3>
          <span>Adventrous and exciting game another epic</span>
          <span>story line from activision</span>
          <Button variant="contained" color="success" className="btn">
            add to cart
          </Button>
        </div>
      </div>
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
