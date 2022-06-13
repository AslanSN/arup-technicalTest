import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../../store/appContext.js";
import SpecificFilter from "./SpecificFilter/SpecificFilter.jsx";

import "./FilterCardStyles.scss";
const FilterCardPropTypes = {
  id: PropTypes.string,
  value: PropTypes.object,
};
/**
 * ! Component - Filter Card container
 * * AslanSN - 22-06-12
 * ? It will be called with a filter for each kind of data
 * @returns React component
 */
const FilterCard = (props) => {
  const { store, actions } = useContext(Context);
 
  const familyName = props.value;

  const specificFilterListener = (object, id) => (
    <SpecificFilter value={object} id={id} />
  );
  return (
    <div className="filter-card-container">
      <hr />
      <h3>{familyName}</h3>

      {Object.entries(store.families[familyName]).map(specificFilterListener)}
    </div>
  );
};

FilterCard.PropTypes = FilterCardPropTypes;
export default FilterCard;
