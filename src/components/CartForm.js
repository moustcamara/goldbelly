
import React, { Component } from 'react';

import CartItem from './CartItem';
import CartTotals from './CartTotals';


let CartForm = props => {

	

	return (

		<form onSubmit={props.actions.submit} className="cart__form">

	
				<div className="cart__items">			
					{props.info.map((cartItem, i) => <CartItem key={i} actions={props.actions} info={props.info[i]} /> )}
				</div>

					<CartTotals actions={props.actions} summary={props.summary}/>

		</form>

	)
	

}

export default CartForm; 

