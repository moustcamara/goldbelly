import React from 'react';
import ProductOptions from './ProductOptions';
import ProductFieldsGroup from './ProductFieldsGroup';
import SubmitButton from './SubmitButton';

const ProductForm = props => (

	<div className="product__form-holder">
		
		<form onSubmit={props.actions.submit} className="product__form">

			<ProductOptions actions={props.actions} fields={props.fields}/>
			<ProductFieldsGroup actions={props.actions} fields={props.fields}/>
			<div>
				<SubmitButton text="Add to Cart" />
			</div>

		</form>

	</div>

)

export default ProductForm;