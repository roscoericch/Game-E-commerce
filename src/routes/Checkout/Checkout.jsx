import React from "react";
import "./Checkout.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../../Contexts/contexts";
import Button from "@mui/material/Button";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Checkout = () => {
  const { data } = useContext(DataContext);
  useEffect(() => {
    console.log(data);
  }, []);
  const { img, title, classification, price } = data;
  return (
    <div className="checkoutPage">
      <div className="CheckoutContainer">
        <img src={img} className="img" />
        <div className="description">
          <div className="row row-1">
            <h3 className="title">{title}</h3>
            <BsHeart className="heart" />
          </div>
          <div className="row row-2">
            <div className="classification-text">{classification}</div>
            <div className="rating">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
            </div>
          </div>
          <div className="row row-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            delectus nihil commodi architecto ad, animi vero enim natus modi
            perspiciatis fuga exercitationem deleniti, eligendi explicabo
            provident id? Iste, perferendis in?
          </div>
          <div className="row row-4">
            <Button variant="contained" size="small" color="success">
              Pay
            </Button>
            <div className="quantity">
              <div className="price">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
