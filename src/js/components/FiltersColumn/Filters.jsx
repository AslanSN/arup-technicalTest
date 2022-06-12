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
  const filterCardListing = (id) => <FilterCard key={id} />;
  // actions.filtersTitles();
  return (
    <div className="filters-column">
      <subtitle>Filters</subtitle>
      <hr />
      <div className="disciplines">{store.families.map(filterCardListing)}</div>
    </div>
  );
};

export default Filters;
