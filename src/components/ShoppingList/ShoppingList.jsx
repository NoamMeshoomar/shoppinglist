import React, { useState } from 'react';

import CategoriesList from './CategoriesList';
import SearchBar from './SearchBar';
import ProductsList from './ProductsList';
import CartProduct from './CartProduct';

import '../../styles/ShoppingList/ShoppingList.css';

const ShoppingList = () => {
	const [category, setCategory] = useState('food');
	const [searchText, setSearchText] = useState('');
	const [cart, setCart] = useState([]);

	const handleChangeCategory = category => setCategory(category);

	const handleSearch = searchText => setSearchText(searchText.toLowerCase());

	const handleAddToCart = productToAdd => {
		const productExist = cart.find(product => product.id === productToAdd.id);

		if(!productExist) {
			setCart(prev => [...prev, { ...productToAdd, quantity: 1 }]);
		} else {
			const cartIndex = cart.indexOf(productExist);
			const newCartArray = [...cart];
			newCartArray[cartIndex].quantity++;
			setCart(newCartArray);
		}
	}

	const handleRemoveFromCart = productToRemove => {
		setCart(cart.filter(product => product.id !== productToRemove.id));
	}

	const handleReset = () => setCart([]);
	
	const printCart = () => console.log(cart);

	return(
		<div className="shopping-list">
			<h3 style={ { fontSize: 22, fontWeight: 500 } }>Shopping List</h3>
			<CategoriesList changeCategory={ handleChangeCategory } />
			<SearchBar SearchHandler={ handleSearch } />
			<ProductsList searchText={ searchText } category={ category } addToCart={ handleAddToCart } />
			<div className="cart-products">
				{ cart.length > 0 && cart.map(product => <CartProduct 
					key={ product.id } 
					product={ product } 
					removeFromCart={ handleRemoveFromCart } 
				/>) }
			</div>
			<div className="buttons" style={ { marginTop: 20 } }>
				<button onClick={ handleReset }>Start Over</button>
				<button onClick={ printCart }>Done</button>
			</div>
		</div>
	)
}

export default ShoppingList;