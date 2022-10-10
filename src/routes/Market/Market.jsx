import React from "react";

import "./Market.scss";
import MediumCard from "../../components/MediumCard/MediumCard";
import { Market } from "../../assets/products";
const MarketPage = () => {
  return (
    <div className="market-container">
      {Market.map((e) => (
        <MediumCard
          Key={e.id}
          img={e.Img}
          title={e.Name}
          classification={e.color}
          price={e.price}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default MarketPage;
