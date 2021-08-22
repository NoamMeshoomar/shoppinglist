import React from 'react';

import '../../styles/ShoppingList/SearchBar.css';

const SearchBar = ({ SearchHandler }) => {
	return(
		<div className="search-bar">
			<input type="text" placeholder="Search..." onChange={ e => SearchHandler(e.target.value) } />
		</div>
	)
}

export default SearchBar;