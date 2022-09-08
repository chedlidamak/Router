import React from "react";
import { useParams } from "react-router-dom";

const Description = ({ filmList }) => {
  const params = useParams();
  const Mov = filmList.find((el) => el.id === params.movId);
  return (
    <div>
      {Mov.Trailer}
      <br></br>
      <div>{Mov.description}</div>
    </div>
  );
};

export default Description;
