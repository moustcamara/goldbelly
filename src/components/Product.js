import React from 'react';

import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductByline from './ProductByline';
import ProductForm from './ProductForm';



const Product = props => (

	<div className="container">

		<div className="product row">

			<div className="col-half col-sm-full">			
				<ProductImage />
				<ProductDescription />
			</div>

			<div className="col-half col-sm-full">
				<div className="product__intro">
					<ProductTitle title={props.info.title} />
					<ProductByline category={props.info.category} />
				</div>
				<ProductForm actions={props.actions} fields={props.info}/>
			</div>

		</div>


	</div>

);

export default Product;