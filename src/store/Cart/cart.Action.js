import { createAction } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItem, productsToAdd) => {
  const existingCart = cartItem.find((item) => {
    return item.id === productsToAdd.id;
  });
  if (existingCart) {
    return cartItem.map((item) =>
      item.id === productsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItem, { ...productsToAdd, quantity: 1 }];
};
const reduceCartItem = (cartItem, productsToRemove) => {
  if (productsToRemove.quantity > 1) {
    return cartItem.map((item) =>
      item.id === productsToRemove.id
        ? { ...item, quantity: productsToRemove.quantity - 1 }
        : item
    );
  }
  if (productsToRemove.quantity <= 1) {
    return cartItem.filter((item) => item.id !== productsToRemove.id);
  }
};
const removeCartItem = (cartItem, productsToRemove) => {
  return cartItem.filter((item) => item.id !== productsToRemove.id);
};

export const setCartItems = (cartItem) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItem);
export const addItemToCart = (cartItem, productsToAdd) => {
  const newCartItems = addCartItem(cartItem, productsToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems);
};
export const reduceItemFromCart = (cartItem, productsToRemove) => {
  const newCartItems = reduceCartItem(cartItem, productsToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems);
};
export const removeItemFromCart = (cartItem, productsToRemove) => {
  const newCartItems = removeCartItem(cartItem, productsToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS , newCartItems);
};
