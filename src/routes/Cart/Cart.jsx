import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";
import CartCard from "../../components/CartCard/CartCard";
import { Products } from "../../assets/products";
import { selectCartItem } from "../../store/Cart/cart.selector";

const Cart = () => {
  const cartItem = useSelector(selectCartItem);
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
    </div>
  );
};

export default Cart;
