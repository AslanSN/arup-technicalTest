import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../../store/appContext.js";
import SpecificFilter from "./SpecificFilter/SpecificFilter.jsx";

import "./FilterCardStyles.scss";
const FilterCardPropTypes = {
	family: PropTypes.string.isRequired,
}
/**
 * ! Component - Filter Card container
 * * AslanSN - 22-06-12
 * ? It will be called with a filter for each kind of data
 * @returns React component
 */
const FilterCard = (props) => {
	const { store, actions } = useContext(Context);

  return (
    <div className="filter-card-container">
      <h3>{props.family}</h3>
      <SpecificFilter />
    </div>
  );
};

FilterCard.PropTypes = FilterCardPropTypes;
export default FilterCard;
