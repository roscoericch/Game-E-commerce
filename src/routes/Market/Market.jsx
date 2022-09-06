import React from "react";

import "./Market.scss";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import { Market } from "../../assets/products";
const MarketPage = () => {
  return (
    <div className="market-container">
      {Market.map((e) => (
        <ProductsCard
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
