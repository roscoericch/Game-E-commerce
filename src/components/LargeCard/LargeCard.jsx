import "./LargeCard.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItem } from "../../store/Cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/Cart/cart.Action";
import { AiFillStar } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
const LargeCard = ({ id, img, title, classification, price }) => {
  const cartItem = useSelector(selectCartItem);
  const dispatch = useDispatch();
  const addToCart = (Product) => dispatch(addItemToCart(cartItem, Product));
  const removeFromCart = (Product) =>
    dispatch(removeItemFromCart(cartItem, Product));
  const [active, setActive] = useState(true);
  return (
    <motion.div
      initial={{ rotateY: "180deg" }}
      animate={{ rotateY: "0deg" }}
      transition={{ duration: 1 }}
      className="latest-Game"
    >
      <img
        className="lg-img"
        src={img}
        alt="4x-J8-XB3bi888-QTLZYdl7-Oi0s"
        border="0"
      />

      <div className="tag">
        Featured <AiFillStar className="star" />
      </div>
      <div className="content">
        <Button
          variant="outlined"
          disableElevation
          sx={{
            backgroundColor: "#c3d1e0d0",
            border: "2px solid #9abfe7e3",
            color: "#1976d2",
            fontSize: "1rem",
            transform: "rotate(2deg)",
          }}
          className="btn btn-price"
        >
          <GiPriceTag className="icon" />${price}
        </Button>
        {active ? (
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#c3d1e0d0",
              border: "2px solid #9abfe7e3",
              color: "#fa1212",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              setActive(false);
              addToCart({
                id: id,
                img: img,
                title: title,
                classification: classification,
                price: price,
              });
            }}
            className="btn"
          >
            <MdAddShoppingCart />
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#c3d1e0d0",
              border: "2px solid #9abfe7e3",
              color: "#06bb06",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              setActive(true);
              removeFromCart({
                id: id,
                img: img,
                title: title,
                classification: classification,
                price: price,
              });
            }}
            className="btn"
          >
            <BsFillCartCheckFill />
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default LargeCard;
