import React, { useEffect, useState } from 'react';

import ProductsData from '../../helpers/ProductsData';

import '../../styles/ShoppingList/ProductsList.css';

const ProductsList = ({ category, searchText, addToCart }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// Filter the products to display by category
		const filteredProducts = ProductsData.filter(product => product.category === category);
		setProducts(filteredProducts);
		
		// Filter products by search input text
		if(searchText.length > 0) {
			const searchedProducts = ProductsData.filter(product => {
				return product.category === category && product.name.toLowerCase().includes(searchText)
			});
			setProducts(searchedProducts);
		}
	}, [category, searchText]);

	return(
		<div className="products-list">
			{ products.length > 0 ? products.map(product => {
				return(
					<div key={ product.id } className="product" onClick={ () => addToCart(product) }>
						<img src={ product.image } alt="" />
						<p>{ product.name }</p>
					</div>
				)
			}) : <h3>No Products...</h3> }
		</div>
	)
}

export default ProductsList;