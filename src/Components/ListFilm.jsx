import React from "react";
import Film from "./Film";

const ListFilm = ({ list }) => {
  return (
    <div>
      {list.length ? list.map((elm) => <Film elm={elm} />) : <h2>Not found</h2>}
    </div>
  );
};

export default ListFilm;
