import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../../store/appContext.js";
import SpecificFilter from "./SpecificFilter/SpecificFilter.jsx";

import "./FilterCardStyles.scss";
const FilterCardPropTypes = {
  id: PropTypes.string,
};
/**
 * ! Component - Filter Card container
 * * AslanSN - 22-06-12
 * ? It will be called with a filter for each kind of data
 * @returns React component
 */
const FilterCard = (props) => {
  const { store, actions } = useContext(Context);
  const familyName = Object.keys(store.families)[props.id];

  const specificFilterListener = (value, id) => {
    return <SpecificFilter value={value} id={id} />;
  };

  return (
    <div className="filter-card-container">
      <h3>{Object.keys(store.families)[props.id]}</h3>
      <SpecificFilter />
      {/* {Object.values(store.families)[props.id].map(SpecificFilterListener)} */}
      {/* {console.log(store.families[props.id])}
      {console.log(store.families)} */}
    </div>
  );
};

FilterCard.PropTypes = FilterCardPropTypes;
export default FilterCard;
