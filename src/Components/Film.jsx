import React from "react";
import StarRatingComponent from 'react-star-rating-component';
const Film = ({ elm }) => {
  return (
    <div>
      <h2>{elm.Title}</h2>
      <h2>{elm.Description}</h2>
      <img src={elm.Poster} alt="movie" />
      <StarRatingComponent
				name="star" value={elm.rating}/>
    </div>
  );
};

export default Film;
