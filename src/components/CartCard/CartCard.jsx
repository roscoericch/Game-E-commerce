import React from "react";
import "./CartCard.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Contexts/contexts";
import Button from "@mui/material/Button";
import { AiFillStar } from "react-icons/ai";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { removeItemFromCart } from "../../store/Cart/cart.Action";

const CartCard = ({ img, title, classification, price, id }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  const Product = { img, title, classification, price, id };
  const removeItem = () => dispatch(removeItemFromCart(cartItem, Product));
  const { SetData } = useContext(DataContext);
  const navigate = useNavigate();
  const goToNavigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="CardContainer">
      <img src={img} className="img" />
      <div className="description">
        <div className="row row-1">
          <h3 className="title">{title}</h3>
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
          <Button
            variant="text"
            size="small"
            color="error"
            onClick={removeItem}
          >
            remove x
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
