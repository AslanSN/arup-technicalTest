import React from 'react';
import {Tokens} from '../../../../Tokens.js'
import { FilterCheckbox } from '../../StyledFilterColumnComponents/FilterCheckbox';
import { FilterLabel } from '../../StyledFilterColumnComponents/FilterLabelStyled';

import "./SpecificFilterStyles.scss"
/**
 * !Component - Specific Filter
 * * AslanSN - 22-06-12
 * @returns React Component
 */
const SpecificFilter = () => {
	return (
    <>
      <div className="wrapper">
				<FilterCheckbox type="checkbox" />
        <FilterLabel color={Tokens.Colors.text.disabled} font-weight="bold">
          Something
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

export default SpecificFilter;