import React from 'react';

import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductByline from './ProductByline';
import ProductForm from './ProductForm';

const Product = props => (

	<div className="container">

		<div className="row">

			<div className="col-half">
				<ProductImage/>
			</div>

			<div className="col-half">
				<ProductTitle title={'E-Gift Card'} />
				<ProductByline/>
				<ProductForm />
			</div>

		</div>

	</div>

);

export default Product;