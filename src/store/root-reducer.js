import { combineReducers } from "redux";
// import { userReducer } from "./user/user.reducer";
// import { categoriesReducer } from "./Category/category.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { favouriteReducer } from "./Favourite/Facourite.reducer";
import { userReducer } from "./User/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
});
