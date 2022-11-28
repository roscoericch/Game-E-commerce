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
import { Autoplay, EffectFlip, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperComp from "../../components/Swiper/Swiper";
import SwiperMobile from "../../components/Swiper/SwiperMobile";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-flip";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
const Home = () => {
  const prod1 = {
    img: "https://i.ibb.co/4fqbt9h/4x-J8-XB3bi888-QTLZYdl7-Oi0s.jpg",
    id: "featured1",
    title: "God Of War",
    classification: "adventure",
    price: 110,
  };
  const prod2 = {
    img: "https://i.ibb.co/gwkBPDP/b-F1qm-EL5-RM6a-Mf-L0o-Lcx-Re8-B.jpg",
    id: "featuredIV",
    title: "Mortal Kombat",
    classification: "adventure",
    price: 80,
  };
  const prod3 = {
    img: "https://i.ibb.co/G7Fz9m6/a3a-Wk7-Rdt8-Lod5-GHVwj-SA8-BW.jpg",
    id: "featuredV",
    title: "SteelRising",
    classification: "adventure",
    price: 80,
  };
  const prod4 = {
    img: "https://i.ibb.co/qYNvWw3/Mkbq-F5ve-MFZnm-QRtsbm-Qo-NZT.jpg",
    id: "featured2",
    title: "FIFA 23",
    classification: "adventure",
    price: 150,
  };
  const prod5 = {
    img: "https://i.ibb.co/4Wy8ZrX/78-A5-Nw4-Nqv-AVj0z04-ZW3lr-ZJ.jpg",
    id: "featured2",
    title: "Call of duty",
    classification: "adventure",
    price: 180,
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "200px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      className="home-container"
    >
      <h3 className="classification">Your one stop online Gamestore</h3>
      <SwiperMobile prod1={prod1} prod2={prod2} prod3={prod3} />
      <div className="bg-class md-class">
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
      <SwiperComp
        title={"New"}
        decor={"sm-class"}
        nav={false}
        num={3}
        limit={[0, 30]}
      />
      <div className="section">
        {Products.filter((e, index) => index < 6).map((e, index) => (
          <MediumCard
            Key={e.id}
            img={e.Image}
            title={e.Name}
            classification={e.Genre}
            price={e.Price}
            id={e.id}
            category={e.category}
          />
        ))}
      </div>
      <SwiperMobile prod1={prod4} prod2={prod5} prod3={prod1} />
      <SwiperComp
        title={"Recommended"}
        nav={false}
        num={3}
        limit={[20, 30]}
        decor={"sm-class"}
      />
      <SwiperComp
        title={"Recommended"}
        nav={true}
        decor={"bg-class"}
        num={6}
        limit={[20, 30]}
      />
      <SwiperComp
        title={"Rated"}
        limit={[7, 20]}
        num={3}
        nav={false}
        decor={"sm-class"}
      />
      <SwiperComp
        title={"Rated"}
        limit={[7, 20]}
        decor={"bg-class"}
        nav={true}
        num={6}
      />
    </motion.div>
  );
};

export default Home;
