import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Favourites from "./routes/Favourites/Favourites";
import Cart from "./routes/Cart/Cart";
import Checkout from "./routes/Checkout/Checkout";
import CheckoutContext from "./Contexts/contexts";
import MarketPage from "./routes/Market/Market";
import SignInForm from "./components/authentication/signInForm";
import SignUpForm from "./components/authentication/signUpForm";
import { Products, Recommended } from "./assets/products";
import {
  onAuthStateChangeListener,
  createUserDocument,
  collectionRef,
} from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./store/User/user.Action";
import { selectCurrentUser } from "./store/User/user.selector";
// import { getUserData } from "./utils/firebase/firebase.utils";
// import { getData } from "./utils/firebase/firebase.utils";
//////// FIREBASE UTILS
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  collection,
} from "firebase/firestore";
import ProductsCheckout from "./routes/Checkout/ProductsPages/ProductsCheckout";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const getData = async (id) => {
    // const collectionRef = collection(db, "users");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    dispatch(
      setCurrentUser(
        querySnapshot.docs
          .filter((item) => {
            return item.id === id;
          })
          .map((item) => {
            return item.data();
          })
      )
    );
    return;
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocument(user);
        console.log(user);
        getData(user.uid);
        // dispatch(setCurrentUser(user));
        return;
      }
      dispatch(setCurrentUser(user));
      console.log(currentUser);
    });
    return unsubscribe;
  }, []);
  return (
    <CheckoutContext>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/Market" element={<MarketPage />} />
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path="/checkout/*" element={<ProductsCheckout />} /> */}
        </Route>
        <Route path="/SignIn/" element={<SignInForm />} />
        <Route path="/SignIn/SignUp" element={<SignUpForm />} />
        {Products.map((item, index) => (
          <Route path={`/${item.id}`} element={<Checkout Product={item} />} />
        ))}
        {Recommended.map((item, index) => (
          <Route path={`/${item.id}`} element={<Checkout Product={item} />} />
        ))}
      </Routes>
    </CheckoutContext>
  );
};

export default App;
