import React, { useContext } from "react";
import FilterCard from "./FilterCards/FilterCard.jsx";
import { Context } from "../../store/appContext.js";
import "./FiltersStyles.scss";

/**
 * ! Father Component - Represents Filters' Column
 * * AslanSN - 22-06-12
 * @returns
 */
const Filters = () => {
  const { store } = useContext(Context);
  const filterCardListing = (value, id) =>
    value !== "Num." &&
    value !== "Message" &&
    value !== "Sent to" &&
    value !== "Reg. Date" &&
    value !== "Subject" ? (
      <FilterCard id={id} value={value} />
    ) : null;

  return (
    <div className="filters-column">
      <subtitle>Filters</subtitle>
      <div className="disciplines">
        {Object.keys(store.families).map(filterCardListing)}
      </div>
    </div>
  );
};

export default Filters;
