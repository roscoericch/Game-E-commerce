import "./Navigation.scss";
import BrandLogo from "./../../assets/img/GameStore.jpg";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Outlet, Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { VscHome } from "react-icons/vsc";
import { BsHeartFill, BsShop } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Products, Market, Recommended } from "../../assets/products";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/User/user.selector";
import { selectFavouriteItem } from "../../store/Favourite/Favourite.selector";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const { pathname } = useLocation();
  const [overlay, showOverlay] = useState(false);
  console.log(pathname);
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
        {/* <Autocomplete
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
        /> */}
        <div className="profile">
          <BiUser className="userIcon" onClick={() => showOverlay(!overlay)} />
          {user && <h3>{user[0].displayName}</h3>}
          <div className={overlay ? "overlay" : "hidden"}>
            {user ? (
              <Button variant="contained" onClick={signOutUser} color="error">
                Log Out
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
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <Link
            className={
              pathname === "/" ? "sidebar-item active" : "sidebar-item"
            }
            to="/"
          >
            <VscHome className="nav-icon" />
            <div className="nav-label">Home</div>
          </Link>
          <Link
            className={
              pathname === "/Favourites"
                ? "sidebar-item active"
                : "sidebar-item"
            }
            to="/Favourites"
          >
            <div className="icon">
              <BsHeartFill className="nav-icon favouriteIcon" />
              <div className="count">{favouriteItem.length}</div>
            </div>
            <div className="nav-label">Favourites</div>
          </Link>
          <Link
            className={
              pathname === "/Market" ? "sidebar-item active" : "sidebar-item"
            }
            to="/Market"
          >
            <BsShop className="nav-icon" />{" "}
            <div className="nav-label">Market</div>
          </Link>
          <Link
            className={
              pathname === "/Cart" ? "sidebar-item active" : "sidebar-item"
            }
            to="/Cart"
          >
            <div className="icon">
              <AiOutlineShoppingCart className="nav-icon" />
              <div className="count">{cartItem.length}</div>
            </div>
            <div className="nav-label">Cart</div>
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
            <span>support 24/7 Page</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navigation;
