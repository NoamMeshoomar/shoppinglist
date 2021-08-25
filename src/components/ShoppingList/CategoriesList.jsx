import React from 'react';

import '../../styles/ShoppingList/CategoriesList.css';

const CategoriesList = ({ changeCategory }) => {
	const categoryChange = e => changeCategory(e.target.value);

	return(
		<div className="categories-list">
			<select onChange={ categoryChange }>
				<option value="food" defaultChecked>Food</option>
				<option value="fruits">Fruits</option>
			</select>
		</div>
	)
}

export default CategoriesList;