import React from "react";
import "./Home.scss";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Products, Recommended } from "../../assets/products";
import { Button } from "@mui/material";
const Home = () => {
  return (
    <div className="home-container">
      <p className="classification">Latest Game</p>
      <div className="latest-Game">
        <h2>GOD OF WAR</h2>
        <h3>"PARADISE"</h3>
        <span>God Of War is an adventrous,</span>
        <span>Bloody game another epic</span>
        <span>story line from sony</span>
        <Button variant="contained" color="success" className="btn">
          Play Now
        </Button>
      </div>
      {Products.map((e) => (
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
        <h2>SLAY MAMAKE</h2>
        <h3>"HABVIC"</h3>
        <span>slay mamake is an adventrous,</span>
        <span>exciting game another epic</span>
        <span>story line from sony</span>
        <Button variant="contained" color="success" className="btn">
          Explore
        </Button>
      </div>
      <p className="classification">Recommended</p>
      {Recommended.map((e) => (
        <ProductsCard
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

export default Home;
