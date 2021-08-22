import React from 'react';

import '../../styles/ShoppingList/CategoriesList.css';

const CategoriesList = ({ changeCategory }) => {
	return(
		<div className="categories-list">
			<select onChange={ e => changeCategory(e.target.value) }>
				<option value="food" defaultChecked>Food</option>
				<option value="fruits">Fruits</option>
			</select>
		</div>
	)
}

export default CategoriesList;