import React, { useEffect, useState } from 'react';

import ProductsData from '../../helpers/ProductsData';

import '../../styles/ShoppingList/ProductsList.css';

const ProductsList = ({ category, searchText, addToCart }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// Filter the products to display by category
		setProducts(ProductsData.filter(product => product.category === category));
		
		// Filter products by search input text
		if(searchText.length > 0) {
			setProducts(
				ProductsData.filter(product => {
					return product.category === category && product.name.toLowerCase().includes(searchText)
				})
			);
		}
	}, [category, searchText]);

	const addProductToCart = product => () => addToCart(product);

	return(
		<div className="products-list">
			{ products.length > 0 ? products.map(product => {
				return(
					<div key={ product.id } className="product" onClick={ addProductToCart(product) }>
						<img src={ product.image } alt="" />
						<p>{ product.name }</p>
					</div>
				)
			}) : <h3>No Products...</h3> }
		</div>
	)
}

export default ProductsList;