import React from "react";
import "./ProductsCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Contexts/contexts";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { selectFavouriteItem } from "../../store/Favourite/Favourite.selector";
import { addItemToCart } from "../../store/Cart/cart.Action";
import { addItemToFavourite } from "../../store/Favourite/Favourite.Action";
import { removeItemFromFavourite } from "../../store/Favourite/Favourite.Action";

const ProductsCard = ({ img, title, classification, price, id }) => {
  //   const [active, SetActive] = useState(false);
  const { SetData } = useContext(DataContext);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const favouriteItem = useSelector(selectFavouriteItem);
  const Product = { id, img, title, classification, price };
  const addToCart = () => dispatch(addItemToCart(cartItem, Product));
  const Favourite = () => dispatch(addItemToFavourite(favouriteItem, Product));
  const Unfavourite = () =>
    dispatch(removeItemFromFavourite(favouriteItem, Product));
  const navigate = useNavigate();
  const goToNavigateHandler = () => {
    navigate("/checkout");
  };
  const active = favouriteItem.some((e) => e.id === Product.id);
  return (
    <div className="CardContainer">
      <img src={img} className="img" />
      <div className="description">
        <div className="row row-1">
          <h3 className="title">{title}</h3>
          {active ? (
            <BsHeartFill className="heart" onClick={Unfavourite} />
          ) : (
            <BsHeart className="heart" onClick={Favourite} />
          )}
        </div>
        <div className="row row-2">
          <div className="classification">
            <div className="classification-text">{classification}</div>
            <div className="rating">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
            </div>
          </div>
          <div className="price">{price}</div>
        </div>
        <div className="row row-3">
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => {
              SetData(Product);
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

export default ProductsCard;