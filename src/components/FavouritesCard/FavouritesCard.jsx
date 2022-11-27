import React from "react";
import "./FavouritesCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { BsHeartFill } from "react-icons/bs";
import { AiFillStar, AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { addItemToCart } from "../../store/Cart/cart.Action";
import { removeItemFromFavourite } from "../../store/Favourite/Favourite.Action";
import { selectFavouriteItem } from "../../store/Favourite/Favourite.selector";

const FavouritesCard = ({ img, title, classification, price, id }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const favouriteItem = useSelector(selectFavouriteItem);
  const Product = { id, img, title, classification, price };
  const removeItem = () =>
    dispatch(removeItemFromFavourite(favouriteItem, Product));
  const addToCart = () => dispatch(addItemToCart(cartItem, Product));
  const navigate = useNavigate();
  const goToNavigateHandler = () => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="FavouritesContainer">
      <img src={img} className="img" onClick={goToNavigateHandler} />
      <div className="description">
        <div className="row row-1">
          <h3 className="title">{title}</h3>
          <BsHeartFill className="heart" onClick={removeItem} />
        </div>
        <div className="row row-2">
          <div className="price">${price}</div>
        </div>
        <div className="row row-3">
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => {
              goToNavigateHandler();
            }}
          >
            Buy Now
          </Button>
          <Button variant="text" color="secondary" onClick={addToCart}>
            <AiOutlineShoppingCart /> +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavouritesCard;
