import React, { Component } from 'react';

let CartItemAttributes = props => (

	<div className="cart__single-item-attributes">
		<div className="cart__single-item-attr-line"><strong>To:</strong> {props.info.recipientName} ({props.info.recipientEmail})</div>
		<div className="cart__single-item-attr-line"><strong>From:</strong> {props.info.senderName} ({props.info.senderEmail})</div>
		<div className="cart__single-item-attr-line"><strong>Message:</strong> {props.info.senderMessage}</div>
	</div>

)


export default CartItemAttributes;