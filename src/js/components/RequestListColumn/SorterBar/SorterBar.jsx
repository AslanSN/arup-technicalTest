import React, { useContext } from "react";
import { Context } from "../../../store/appContext.js";
import "./SorterBarStyles.scss";

/**
 * *AslanSN - 22-06-10
 * Bar that Sorts by type of data
 * TODO: Sort by each category not only by number!
 * TODO: Add arrow for each category on action!
 * @returns react Component
 */
const SorterBar = () => {
  const { actions } = useContext(Context);
  return (
    <ul className="filter-list-container">
      <li />
      <li className="filter-list-item ">
        <button
          className="btn filter-list-button"
          onClick={actions.sortByNumber}>
          Num.
        </button>
      </li>
      <li className="filter-list-item">
        <button className=" btn filter-list-button">Discipline</button>
      </li>
      <li className="filter-list-item">
        <button className="btn filter-list-button">Reg. date</button>
      </li>
      <li className="filter-list-item">
        <button className="btn filter-list-button">Sent to:</button>
      </li>
      <li className="filter-list-item">
        <button className=" btn filter-list-button">Subject</button>
      </li>
      <li className="filter-list-item">
        <button className="btn filter-list-button">Status</button>
      </li>
      <li className="filter-list-item">
        <button className="btn filter-list-button">Critical</button>
      </li>
    </ul>
  );
};

export default SorterBar;
