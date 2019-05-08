import React, { Component } from 'react';

class ProductOptionInput extends Component {
	constructor(props){
		super(props)
	}

	

	render() {

		let minVal = 
			this.props.fields.price == 25 ||
			this.props.fields.price == 50 ||
			this.props.fields.price == 100 ||
			this.props.fields.price == 200
			? 0 : 201;

		return (
			<div className="product__option-custom">
				<span className="product__option-currency-sign">$</span>
				<input type="number" placeholder={this.props.fields.price} value={this.props.fields.price} name="price" min={ minVal } max={this.props.max} onChange={this.props.actions.change} onFocus={this.props.actions.setMin} />
				<div className="product__option-note"><small><i>Max value of ${this.props.max}</i></small></div>
			</div>
		)
	}
	

}

	


export default ProductOptionInput;