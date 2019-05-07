import React, { Component } from 'react';

class ProductOptionInput extends Component {
	constructor(props){
		super(props)
	}



	render() {

		let minVal = 
			this.props.fields.giftCardAmount != 25 &&
			this.props.fields.giftCardAmount != 50 &&
			this.props.fields.giftCardAmount != 100 &&
			this.props.fields.giftCardAmount != 200
			? 0 : 201;

		return (
			<div className="product__option-custom">
				<span class="product__option-currency-sign">$</span>
				<input type="number" placeholder={this.props.fields.giftCardAmount} value={this.props.fields.giftCardAmount} name="giftCardAmount" min={ minVal } max={this.props.max} onChange={this.props.actions.change} />
				<div className="product__option-note"><small><i>Max value of ${this.props.max}</i></small></div>
			</div>
		)
	}
	

}

	


export default ProductOptionInput;