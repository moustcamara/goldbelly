import React, { Component } from 'react';
import Product from './Product';


class ProductOptionButtons extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="product__option-group">
				{this.props.choices.map((choice, i, choices) => (
					<label className="product__option-label" htmlFor={'gift-card-amount_' + choice}>
						<input checked={this.props.fields.giftCardAmount == choice} id={'gift-card-amount_' + choice} name="giftCardAmount" type="radio" value={choice} onChange={this.props.actions.change} />
						<span>{ '$' + choice }</span>
					</label>
				) )}

			</div>
		)
	}
	

}

export default ProductOptionButtons;