import { createAction } from "../../utils/reducer/reducer";
import { FAVOURITE_ACTION_TYPES } from "./Favourite.types";

const addFavouriteItem = (favouriteItem, productsToAdd) => {
  return [...favouriteItem, productsToAdd];
};

const removeFavouriteItem = (favouriteItem, productsToRemove) => {
  return favouriteItem.filter((item) => item.id !== productsToRemove.id);
};

export const addItemToFavourite = (favouriteItem, productsToAdd) => {
  const newCartItems = addFavouriteItem(favouriteItem, productsToAdd);
  return createAction(FAVOURITE_ACTION_TYPES.SET_FAVOURITE_ITEMS, newCartItems);
};

export const removeItemFromFavourite = (favouriteItem, productsToRemove) => {
  const newCartItems = removeFavouriteItem(favouriteItem, productsToRemove);
  return createAction(FAVOURITE_ACTION_TYPES.SET_FAVOURITE_ITEMS, newCartItems);
};
