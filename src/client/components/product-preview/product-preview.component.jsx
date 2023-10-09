import React from 'react';

import ShippingIcon from '../../assets/ic_shipping.png';
import { withRouter } from 'react-router-dom';

import './product-preview.styles.scss';
import CurrencyDisplay from '../currency-display/currency-display.component';

const ProductPreview = ({
	id,
	imageUrl,
	price,
	condition,
	title,
	history,
	free_shipping,
}) => {
	return (
		<div
			className='product-preview-container'
			onClick={() => history.push(`/items/${id}`)}
		>
			<img
				width='180'
				height='180'
				className='product-img'
				src={imageUrl}
				alt='product-img'
			/>

			<div className='product-info'>
				<span className='price'>
					<CurrencyDisplay amount={price.amount} currency={price.currency} />
					{free_shipping ? (
						<img src={ShippingIcon} className='shipping-icon' alt='shipping' />
					) : (
						''
					)}
				</span>
				<span className='title'>{title}</span>
			</div>
			<span className='condition'>{condition}</span>
		</div>
	);
};

export default withRouter(ProductPreview);
