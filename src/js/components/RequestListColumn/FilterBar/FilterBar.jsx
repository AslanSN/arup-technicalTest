import React from 'react';

import './FilterBarStyles.scss'

const FilterBar = () => (
  <ul className="filter-list-container">
    <li className="filter-list-item ">
      <button className="btn filter-list-button">
        Num.
      </button>
    </li>
    <li className="filter-list-item">
      <button className=" btn filter-list-button">
        Discipline
      </button>
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

export default FilterBar;