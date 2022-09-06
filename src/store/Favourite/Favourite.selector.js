import { createSelector } from "@reduxjs/toolkit";

const selectFavouriteReducer = (state) => state.favourite;
export const selectFavouriteItem = createSelector(
  [selectFavouriteReducer],
  (favourite) => favourite.favouriteItem
);

