import React from 'react';

import ProductOptionButtons from './ProductOptionButtons';
import ProductOptionInput from './ProductOptionInput';

const ProductOptions = props => (

	<div className="product__options">

		<div className="product__options-heading"><h5>Choose Gift Card Amount:</h5></div>
		<ProductOptionButtons actions={props.actions} fields={props.fields} choices={[25,50,100,200]} />

		<div className="product__options-heading"><h5>Or Enter Custom Value:</h5></div>
		<ProductOptionInput actions={props.actions} fields={props.fields} max={500} />

	</div>

)

export default ProductOptions;