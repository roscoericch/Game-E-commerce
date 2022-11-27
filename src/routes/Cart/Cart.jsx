import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import CartCard from "../../components/CartCard/CartCard";
import Paystack from "../../utils/paystack/paystack";
import { setCartItems } from "../../store/Cart/cart.Action";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { Button } from "@mui/material";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem);
  console.log(cartItem);
  const total = cartItem
    .map((item) => item.quantity * item.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const onSuccess = () => {
    dispatch(setCartItems([]));
  };
  return (
    <div className="cart-container">
      {cartItem.map((e) => (
        <CartCard
          Key={e.id}
          img={e.img}
          title={e.title}
          classification={e.classification}
          price={e.price}
          quantity={e.quantity}
          id={e.id}
        />
      ))}
      {cartItem.length > 0 && (
        <div className="footer">
          <Paystack amount={total} action={"Checkout"} onSuccess={onSuccess} />
          <div className="total">Total:${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
