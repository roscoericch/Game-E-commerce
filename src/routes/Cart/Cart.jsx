import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";
import CartCard from "../../components/CartCard/CartCard";
import { Products } from "../../assets/products";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { Button } from "@mui/material";

const Cart = () => {
  const cartItem = useSelector(selectCartItem);
  console.log(cartItem);
  const total = cartItem
    .map((item) => item.quantity * item.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
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
          <Button variant="contained" color="success">
            Proceed
          </Button>
          <div className="total">Total:${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
