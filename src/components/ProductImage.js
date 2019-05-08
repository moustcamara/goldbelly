import React from 'react';

const ProductImage = props => (

	<div className="product__image">
		<img src={props.info.image} />
	</div>

)

export default ProductImage;