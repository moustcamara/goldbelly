import React, { Component } from 'react';
import CartForm from './CartForm';




let Cart = props => {


	return (
		
		<React.Fragment>
			<div className={ "cart cart--flyout "  + (props.isActive ? "cart--flyout-active" : "") }>


				<div className="cart__header">

					<div className="cart__close">
						<a onClick={props.actions.toggleCart} href="#">
							<svg className="cart__close-icon" viewBox="0 0 32 32" width="100%" height="100%">
								<title>close arrow right</title>
								<path d="M0 6v20c0 1.1 0.9 2 2 2h18c0.525 0 1.050-0.2 1.425-0.575l10-10c0.375-0.4 0.575-0.925 0.575-1.425s-0.2-1.025-0.575-1.425l-10-10c-0.375-0.375-0.875-0.575-1.425-0.575h-18c-1.1 0-2 0.9-2 2zM9.175 16l-2.575-2.575c-0.4-0.4-0.575-0.9-0.575-1.425 0-0.5 0.2-1.025 0.575-1.425 0.375-0.375 0.9-0.575 1.4-0.575s1.025 0.2 1.425 0.575l2.575 2.6 2.575-2.6c0.4-0.375 0.925-0.575 1.425-0.575s1.025 0.2 1.425 0.575c0.375 0.4 0.575 0.925 0.575 1.425s-0.2 1.025-0.575 1.425l-2.6 2.575 2.6 2.575c0.375 0.4 0.575 0.925 0.575 1.425s-0.2 1.025-0.575 1.425c-0.4 0.375-0.925 0.575-1.425 0.575s-1.025-0.2-1.425-0.575l-2.575-2.6-2.575 2.575c-0.4 0.4-0.925 0.6-1.425 0.6s-1.025-0.2-1.425-0.575c-0.4-0.4-0.575-0.9-0.575-1.425 0-0.5 0.2-1.025 0.575-1.425l2.6-2.575z"></path>
							</svg>
						</a>
					</div>

					<div className="cart__title"><span className="h4">Your Cart</span></div>

				</div>

				{props.info.length ? 

					<CartForm actions={props.actions} summary={props.summary} info={props.info} />

					:

					<div className="cart__empty">
							<div className="cart__empty-message">Your cart is empty.</div>
							<a onClick={props.actions.toggleCart} className="btn btn--main">Start Shopping</a>
					</div>

				}

			</div>

			<div onClick={props.actions.toggleCart} className={ props.isActive ? "cart-backdrop cart-backdrop--active" : "cart-backdrop" }></div>
		</React.Fragment>
		
	)
	

}

export default Cart; 