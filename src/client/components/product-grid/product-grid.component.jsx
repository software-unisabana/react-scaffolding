import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectProductPreview,
	selectIsItemsLoaded,
} from '../../redux/item/item.selector';

import ProductPreview from '../product-preview/product-preview.component';
import Spinner from '../spinner/spinner.component';

import './product-grid.styles.scss';

const ProductGrid = ({ products, isLoading }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<div className='product-grid-container'>
			{products.map((product) => (
				<ProductPreview
					key={product.id}
					id={product.id}
					imageUrl={product.picture}
					price={product.price}
					condition={product.condition}
					title={product.title}
					free_shipping={product.free_shipping}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	products: selectProductPreview,
	isLoading: (state) => !selectIsItemsLoaded(state),
});

export default connect(mapStateToProps)(ProductGrid);
