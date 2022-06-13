import React from "react";
import PropTypes from "prop-types";

import { Tokens } from "../../../../../resources/Tokens.js";
import { FilterCheckbox } from "../../StyledFilterColumnComponents/FilterCheckbox";
import { FilterLabel } from "../../StyledFilterColumnComponents/FilterLabelStyled";

import "./SpecificFilterStyles.scss";

const SpecificFilterPropTypes = {
  value: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
/**
 * !Component - Specific Filter
 * * AslanSN - 22-06-12
 * @returns React Component
 */
const SpecificFilter = (props) => {
  console.log(props.value);
  const key = props.value[0];
  const value = props.value[1];

  return (
    <div className="specific-filter">
      <div className="wrapper form-check" key={props.id}>
        <FilterCheckbox
          className="form-check-input"
          type="checkbox"
          value=""
          id={key}
        />
        <FilterLabel
          className="form-check-label"
          color={Tokens.Colors.text.disabled}
          font-weight="bold"
          for={key}>
          {key}
        </FilterLabel>
      </div>
      <div className="counters">
        {/* <div className="bar"></div> */}
        <ProgressBar animated now={`${key}%`} />
        <FilterLabel color={Tokens.Colors.text.disabled} font-weight="bold">
          {value}
        </FilterLabel>
      </div>
    </div>
  );
};

SpecificFilter.PropTypes = SpecificFilterPropTypes;

export default SpecificFilter;
