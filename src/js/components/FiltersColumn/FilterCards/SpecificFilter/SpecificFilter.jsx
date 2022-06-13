import React from 'react';
import PropTypes from "prop-types";

import { Tokens } from '../../../../Tokens.js'
import { FilterCheckbox } from '../../StyledFilterColumnComponents/FilterCheckbox';
import { FilterLabel } from '../../StyledFilterColumnComponents/FilterLabelStyled';

import "./SpecificFilterStyles.scss"

const SpecificFilterPropTypes = {
  value: PropTypes.string,
  id: PropTypes.string
}
/**
 * !Component - Specific Filter
 * * AslanSN - 22-06-12
 * @returns React Component
 */
const SpecificFilter = (props) => {
	return (
    <>
      <div className="wrapper" key={props.id}>
				<FilterCheckbox type="checkbox" />
        <FilterLabel color={Tokens.Colors.text.disabled} font-weight="bold">
          {props.value || "Something"}
        </FilterLabel>
      </div>
      <div className="counters">
        <div className="bar"></div>
        <FilterLabel color={Tokens.Colors.text.disabled} font-weight="bold">
          29
        </FilterLabel>
      </div>
    </>
  );
}

SpecificFilter.PropTypes = SpecificFilterPropTypes;

export default SpecificFilter;