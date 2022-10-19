import React from "react";
import "./CartCard.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiFillStar } from "react-icons/ai";
import { selectCartItem } from "../../store/Cart/cart.selector";
import {
  removeItemFromCart,
  addItemToCart,
  reduceItemFromCart,
} from "../../store/Cart/cart.Action";

const CartCard = ({ img, title, classification, price, id, quantity }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const Product = { img, title, classification, price, id, quantity };
  const removeItem = () => dispatch(removeItemFromCart(cartItem, Product));
  const increaseItem = () => dispatch(addItemToCart(cartItem, Product));
  const reduceItem = () => dispatch(reduceItemFromCart(cartItem, Product));
  const navigate = useNavigate();
  const goToNavigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="Cartcardcontainer">
      <img src={img} className="img" />
      <div className="description">
        <h3 className="title">{title}</h3>
        <div className="classification">{classification}</div>
        <div className="price">${price}</div>
        <div className="count">
          <span className="minus" onClick={reduceItem}>
            -
          </span>
          <span className="value">{quantity}</span>
          <span className="add" onClick={increaseItem}>
            +
          </span>
        </div>
        <div className="removeitem" onClick={removeItem}>
          x
        </div>
      </div>
    </div>
  );
};

export default CartCard;
