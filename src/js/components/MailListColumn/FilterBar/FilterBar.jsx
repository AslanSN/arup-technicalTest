import React from 'react';

import './FilterBarStyles.scss'

const FilterBar = () => (
  <ul className="filter-list-container">
    <li className="filter-list-item">
      <button className="filger-list-num-button">Num.</button>
    </li>
    <li className="filter-list-item">
      <button className="filger-list-num-button">Discipline</button>
    </li>
    <li className="filter-list-item">
      <button className="filger-list-num-button">Reg. date</button>
    </li>
    <li className="filter-list-item">
      <button className="filger-list-num-button">Sent to:</button>
    </li>
    <li className="filter-list-item">
      <button className="filger-list-num-button">Subject</button>
    </li>
  </ul>
);

export default FilterBar;