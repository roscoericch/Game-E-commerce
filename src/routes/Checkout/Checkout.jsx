import React from "react";
import "./Checkout.scss";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { BsHeart } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { RiArrowDropLeftLine } from "react-icons/ri";

const Checkout = ({ Product }) => {
  // const { data } = useContext(DataContext);
  // const Product = useParams();
  console.log(Product);
  // const data = Product
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  const { Image, Name, Genre, Price } = Product;
  return (
    <div className="checkoutPage">
      <div className="CheckoutContainer">
        <RiArrowDropLeftLine onClick={()=>{}} className="nav-back" />
        <img src={Image} className="img" />
        <div className="description">
          <div className="row row-1">
            <h3 className="title">{Name}</h3>
          </div>
          <div className="row row-2">
            <div className="classification-text">{Genre}</div>
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
            <Button variant="contained" color="success">
              BUY NOW
            </Button>
            <div className="quantity">
              <div className="price">${Price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
