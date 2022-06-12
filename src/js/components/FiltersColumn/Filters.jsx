import React from 'react';
import FilterCard from './FilterCards/FilterCard.jsx';

import './FiltersStyles.scss';

/**
 * ! Father Component - Represents Filters' Column
 * * AslanSN - 22-06-12
 * @returns
 */
const Filters = () => {
return (
	<div className="filters-column">
		<subtitle>Filters</subtitle>
		<hr />
		<div className="disciplines">
			<h3>Disciplines</h3>
			<FilterCard/>
		</div>
	</div>
		)
}

export default Filters;