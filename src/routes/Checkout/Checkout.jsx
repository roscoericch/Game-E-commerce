import { useEffect, useState } from "react";
import "./Checkout.scss";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { RiArrowDropLeftLine } from "react-icons/ri";
import Paystack from "../../utils/paystack/paystack";
import { Products, Recommended, Market } from "../../assets/products";

const Checkout = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const onSucces = () => navigate(-1);
  console.log(product);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    // setProduct(Products.find((e) => e.id === Number(id)));
    if (Products.find((e) => e.id == id)) {
      console.log(
        Products.find((e) => e.id === id),
        "tested"
      );
      setProduct(Products.find((e) => e.id == id));
      return;
    } else if (Recommended.find((e) => e.id == id)) {
      setProduct(Recommended.find((e) => e.id == id));
      return;
    } else if (Market.find((e) => e.id == id)) {
      setProduct(Market.find((e) => e.id == id));
      return;
    }
    console.log(product, "tested");
  }, []);
  console.log(product, "done");
  return (
    <div className="checkoutPage">
      <div className="CheckoutContainer">
        <RiArrowDropLeftLine
          onClick={() => navigate(-1)}
          className="nav-back"
        />
        <img src={product.Image} className="img" />
        <div className="description">
          <div className="row row-1">
            <h3 className="title">{product.Name}</h3>
          </div>
          <div className="row row-2">
            <div className="classification-text">{product.Genre}</div>
            <div className="rating">
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
              <AiFillStar className="star" />
            </div>
          </div>
          <div className="row row-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            delectus nihil commodi architecto ad, animi vero enim natus modi
            perspiciatis fuga exercitationem deleniti, eligendi explicabo
            provident id? Iste, perferendis in?
          </div>
          <div className="row row-4">
            <Paystack
              amount={product.Price}
              action={"Buy Now"}
              onSuccess={onSucces}
            />
            <div className="quantity">
              <div className="price">${product.Price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
