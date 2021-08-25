import React from 'react';

import '../../styles/ShoppingList/SearchBar.css';

const SearchBar = ({ SearchHandler }) => {
	const searchHandle = e => SearchHandler(e.target.value);

	return(
		<div className="search-bar">
			<input type="text" placeholder="Search..." onChange={ searchHandle } />
		</div>
	)
}

export default SearchBar;