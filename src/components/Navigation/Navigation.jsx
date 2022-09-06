import "./Navigation.scss";
import BrandLogo from "./../../assets/img/GameStore.jpg";
import React from "react";
// import { Fragment } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { VscHome } from "react-icons/vsc";
import { BsHeartFill, BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Products, Market, Recommended } from "../../assets/products";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/User/user.selector";
import { selectFavouriteItem } from "../../store/Favourite/Favourite.selector";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const SearchOptions = Products.concat(Market).concat(Recommended);
  const user = useSelector(selectCurrentUser);
  const cartItem = useSelector(selectCartItem);
  const favouriteItem = useSelector(selectFavouriteItem);
  const navigate = useNavigate();
  const goToNavigateHandler = () => {
    navigate("/SignIn");
  };
  return (
    <>
      <div className="header">
        <img src={BrandLogo} className="logo-img" />
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          //   getOptionLabel={(option) => option.Name}
          style={{ width: 200, padding: 0, margin: 0 }}
          onChange={(event, value) => {
            console.log(event, value);
          }}
          options={SearchOptions.map((option) => option.Name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search store"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        {user ? (
          <Button variant="contained" onClick={signOutUser} color="error">
            Sign Out
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={goToNavigateHandler}
          >
            SignIn
          </Button>
        )}
      </div>
      <div className="container">
        <div className="sidebar">
          <Link className="sidebar-item" to="/">
            <VscHome className="nav-icon" /> <div>Home</div>
          </Link>
          <Link className="sidebar-item" to="/Favourites">
            <div className="icon">
              <BsHeartFill className="nav-icon favouriteIcon" />
              <div className="count">{favouriteItem.length}</div>
            </div>
            <div>Favourites</div>
          </Link>
          <Link className="sidebar-item" to="/Market">
            <BsShop className="nav-icon" /> <div>Market</div>
          </Link>
          <Link className="sidebar-item" to="/Cart">
            <div className="icon">
              <AiOutlineShoppingCart className="nav-icon" />
              <div className="count">{cartItem.length}</div>
            </div>
            <div>Cart</div>
          </Link>
        </div>
        <Outlet />
      </div>
      <footer className="footer">
        <img src={BrandLogo} className="footer-img" />
        <h3>The Best online Gaming community...</h3>
        <div className="Links">
          <div className="col col1">
            <h4 className="title">HELP</h4>
            <span>Product Support</span>
            <span>pc setup and support</span>
            <span>services</span>
            <span>extended service plans</span>
            <span>community</span>
          </div>
          <div className="col col2">
            <h4 className="title">YOUR LINKS</h4>
            <span>shipping guide</span>
            <span>store location</span>
            <span>affliates</span>
            <span>customer point policy</span>
            <span>Terms and Condition</span>
          </div>
          <div className="col col3">
            <h4 className="title">STORE</h4>
            <span>Contact us</span>
            <span>About us</span>
            <span>faqs</span>
            <span>services</span>
            <span>support 24/7 page</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navigation;
