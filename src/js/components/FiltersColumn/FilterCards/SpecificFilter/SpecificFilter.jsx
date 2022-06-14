import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../../../../store/appContext.js";
import { Tokens } from "../../../../resources/Tokens.js";
import { FilterCheckbox } from "../../StyledFilterComponents/FilterCheckboxStyled";
import { FilterLabel } from "../../StyledFilterComponents/FilterLabelStyled";

import "./SpecificFilterStyles.scss";

const SpecificFilterPropTypes = {
  family: PropTypes.string,
  value: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};
/**
 * !Component - Specific Filter
 * * AslanSN - 22-06-12
 * ? Component deployed for each filter on screen
 * @returns React Component
 */
const SpecificFilter = (props) => {
  const { actions } = useContext(Context),
    key = props.value[0],
    value = props.value[1];

  return (
    <div className="specific-filter">
      <div
        className="wrapper form-check"
        key={props.id}
        onClick={(event) => actions.usefilterByCheckbox(props.family, key)}>
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
        <FilterLabel color={Tokens.Colors.text.disabled} font-weight="bold">
          {value}
        </FilterLabel>
      </div>
    </div>
  );
};

SpecificFilter.PropTypes = SpecificFilterPropTypes;

export default SpecificFilter;
