import React from 'react';

const CartProduct = ({ product, removeFromCart }) => {
	return(
		<div className="cart-product">
			<img src={ product.image } width="50" height="50" alt="" />
			<p>{ product.name }</p>
			<p>{ product.quantity }</p>
			<button onClick={ () => removeFromCart(product) }>X</button>
		</div>
	)
}

export default CartProduct;