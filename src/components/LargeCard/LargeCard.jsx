import "./LargeCard.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItem } from "../../store/Cart/cart.selector";
import { addItemToCart } from "../../store/Cart/cart.Action";
import { AiFillStar } from "react-icons/ai";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
const LargeCard = ({ id, img, title, classification, price }) => {
  const cartItem = useSelector(selectCartItem);
  const dispatch = useDispatch();
  const addToCart = (Product) => dispatch(addItemToCart(cartItem, Product));
  return (
    <motion.div
      initial={{ rotateY: "180deg" }}
      whileInView={{ rotateY: "0deg" }}
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
          variant="contained"
          color="success"
          onClick={() =>
            addToCart({
              id: id,
              img: img,
              title: title,
              classification: classification,
              price: price,
            })
          }
          className="btn"
        >
          add to cart
        </Button>
      </div>
    </motion.div>
  );
};

export default LargeCard;
