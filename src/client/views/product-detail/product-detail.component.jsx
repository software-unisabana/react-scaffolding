import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchItemDetailStart } from '../../redux/item/item.actions';
import {
	selectItemDetail,
	selectIsItemDetailLoaded,
} from '../../redux/item/item.selector';

import Spinner from '../../components/spinner/spinner.component';
import BreadCrumb from '../../components/breadcrumb/breadcrumb.component';
import ProductCheckOut from '../../components/product-checkout/product-checkout.component';

import './product-detail.styles.scss';

const ProductDetailView = ({
	match,
	fetchItemDetailStart,
	itemDetail,
	isLoading,
}) => {
	useEffect(() => {
		const itemId = match.params.id;
		fetchItemDetailStart(itemId);
	}, [fetchItemDetailStart]);
	return isLoading ? (
		<Spinner />
	) : (
		<>
			<BreadCrumb />
			<div className='item-detail-container'>
				<div className='product-detail'>
					<img src={itemDetail.picture} width='680' alt='picture' />
					<div className='product-description'>
						<span className='title'>Descripción del producto</span>
						<span className='description'>{itemDetail.description}</span>
					</div>
				</div>
				<ProductCheckOut
					condition={itemDetail.condition}
					title={itemDetail.title}
					price={itemDetail.price}
					sold_quantity={itemDetail.sold_quantity}
				/>
			</div>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	itemDetail: selectItemDetail,
	isLoading: (state) => !selectIsItemDetailLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchItemDetailStart: (itemId) => dispatch(fetchItemDetailStart(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailView);
