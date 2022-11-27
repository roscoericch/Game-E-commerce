import React from "react";
import "./Favourites.scss";
import FavouritesCard from "../../components/FavouritesCard/FavouritesCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import { useSelector } from "react-redux";
import { selectFavouriteItem } from "../../store/Favourite/Favourite.selector";

const Favourites = () => {
  const Favourites = useSelector(selectFavouriteItem);
  return (
    <div className="features-container">
      {Favourites.length < 1 && <div> No Favourite Items</div>}
      {Favourites.map((e) => (
        <MediumCard
          Key={e.id}
          img={e.img}
          title={e.title}
          classification={e.classification}
          price={e.price}
          id={e.id}
        />
      ))}
    </div>
  );
};

export default Favourites;
