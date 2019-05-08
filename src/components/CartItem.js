
import React, { Component } from 'react';

import CartItemImage from './CartItemImage';

import CartItemTitle from './CartItemTitle';
import CartItemRemove from './CartItemRemove';
import CartItemAttributes from './CartItemAttributes';


let CartItem = props => (

	<div className="cart__single-item col-full row">
		
		<CartItemImage info={props.info} />

		<div className="cart__single-item-info col-three-fourths">
			<div className="cart__single-item-heading">
				<CartItemTitle title={props.info.title} />
				<CartItemRemove info={props.info} actions={props.actions} />
			</div>
			<div className="cart__single-item-values">
				<div className="cart__single-item-qty">Qty {props.info.qty}</div>
				<div className="cart__single-item-price">{'$' + props.info.price}</div>
			</div>
			<CartItemAttributes info={props.info} />
		</div>

	</div>

)
	
export default CartItem;