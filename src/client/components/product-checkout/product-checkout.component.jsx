import React from 'react';

import CurrencyDisplay from '../currency-display/currency-display.component';

import './product-checkout.styles.scss';

const ProductCheckOut = ({ condition, title, price, sold_quantity }) => {
	return (
		<div className='product-check-container'>
			<span className='condition'>
				{condition} - {sold_quantity} vendidos
			</span>
			<span className='title'>{title}</span>
			<div className='price'>
				<CurrencyDisplay
					amount={price.amount}
					currency={price.currency}
					decimalNumber={2}
					fontSize='46'
				/>
			</div>
			<button type='button' className='pay-buttom'>
				Comprar
			</button>
		</div>
	);
};

export default ProductCheckOut;
