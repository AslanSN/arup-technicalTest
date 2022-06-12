import React, { useContext } from "react";
import { Context } from "../../../store/appContext.js";
import SpecificFilter from "./SpecificFilter/SpecificFilter.jsx";

import "./FilterCardStyles.scss";
/**
 * ! Component - Filter Card container
 * * AslanSN - 22-06-12
 * ? It will be called with a filter for each kind of data
 * @returns React component
 */
const FilterCard = () => {
	const { store, actions } = useContext(Context);

  return (
    <div className="filter-card-container">
      <SpecificFilter />
    </div>
  );
};

export default FilterCard;
