import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
const TuitsList = () => {
  const tuits = useSelector((state) => state.tuits);
  return (
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <ul className="list-group">
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
    </div>
  );
};

export default TuitsList;