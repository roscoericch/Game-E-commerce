import React from "react";
import "./ProductsCard.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { selectFavouriteItem } from "../../store/Favourite/Favourite.selector";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/Cart/cart.Action";
import { addItemToFavourite } from "../../store/Favourite/Favourite.Action";
import { removeItemFromFavourite } from "../../store/Favourite/Favourite.Action";

const ProductsCard = ({ img, title, classification, price, id }) => {
  //   const [active, SetActive] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const favouriteItem = useSelector(selectFavouriteItem);
  const Product = { id, img, title, classification, price };
  const addToCart = () => dispatch(addItemToCart(cartItem, Product));
  const removeFromCart = () => dispatch(removeItemFromCart(cartItem, Product));
  const Favourite = () => dispatch(addItemToFavourite(favouriteItem, Product));
  const Unfavourite = () =>
    dispatch(removeItemFromFavourite(favouriteItem, Product));
  const navigate = useNavigate();
  const goToNavigateHandler = () => {
    navigate(`/checkout/${id}`);
  };
  const active = favouriteItem.some((e) => e.id === Product.id);
  const AddedToCart = cartItem.some((e) => e.id === Product.id);
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="CardContainer">
      <img
        src={img}
        className="img"
        onClick={() => {
          goToNavigateHandler();
        }}
      />
      <div className="description">
        <div className="row row-1">
          <h3 className="title">{title}</h3>
          {active ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <BsHeartFill
                // transition={{ duration: 1 }}
                className="heart"
                onClick={Unfavourite}
              />
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <BsHeart className="heart" onClick={Favourite} />
            </motion.div>
          )}
        </div>
        <div className="row row-2">
          <div className="classification">
            <div className="price">${price}</div>
          </div>
          {AddedToCart ? (
            <div className="removecart-btn" onClick={removeFromCart}>
              <AiOutlineShoppingCart /> <div>&#10003;</div>
            </div>
          ) : (
            <div className="addtocart-btn" onClick={addToCart}>
              <AiOutlineShoppingCart /> <div>+</div>
            </div>
          )}
          {/* <div className="price">${price}</div> */}
        </div>
        <div className="row row-3">
          {/* <Button
            variant="contained"
            size="small"
            color="success"
            onClick={() => {
              SetData(Product);
              goToNavigateHandler();
            }}
          >
            Buy Now
          </Button> */}
          {/* {AddedToCart ? (
            <div className="removecart-btn"
              onClick={removeFromCart}
            >
              <AiOutlineShoppingCart /> &#10003;
            </div>
          ) : (
            <div className="addtocart-btn" onClick={addToCart}>
              <AiOutlineShoppingCart /> +
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
