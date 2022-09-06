import { FAVOURITE_ACTION_TYPES } from "./Favourite.types";

export const FAVOURITE_INITIAL_STATE = {
  favouriteItem: [],
};

export const favouriteReducer = (state = FAVOURITE_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case FAVOURITE_ACTION_TYPES.SET_FAVOURITE_ITEMS:
      return { ...state, favouriteItem: payload };
    default:
      return state;
  }
};
