import React, { Component } from 'react';

import CartItem from './CartItem';
import SubmitButton from './SubmitButton';

let CartTotals = props => {

	let cartSubtotal = props.summary;

	return (

		<div className="cart__footer">
			<div className="cart__totals">
				<div className="cart__subtotal">Subtotal { '$' + cartSubtotal }</div>
			</div>
			<div className="cart__checkout-holder"><SubmitButton text="Checkout" /></div>
		</div>

	)

}


export default CartTotals; 

