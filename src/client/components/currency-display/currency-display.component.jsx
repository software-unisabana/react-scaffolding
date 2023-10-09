import React from 'react';
import PropTypes from 'prop-types';

import './currency-display.styles.scss';

const CurrencyDisplay = ({
	amount,
	currency,
	decimalNumber = 0,
	fontSize = 24,
}) => {
	const displayDecimals = decimalNumber > 0;
	let price = amount.toLocaleString('es-AR', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: decimalNumber,
	});
	const getCurrency = () => {
		if ((parseInt(amount).toString().length === 4) & (currency === 'ARS')) {
			price = `${price.slice(0, 3)}.${price.slice(3)}`;
		}
		return displayDecimals ? price.slice(0, (decimalNumber + 1) * -1) : price;
	};
	const getDecimals = () => {
		return displayDecimals ? price.slice(decimalNumber * -1) : '';
	};
	return (
		<span className='currency-display' style={{ fontSize: `${fontSize}px` }}>
			{getCurrency()}
			{displayDecimals ? <span className='decimals'>{getDecimals()}</span> : ''}
		</span>
	);
};

CurrencyDisplay.propTypes = {
	amount: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
	decimalNumber: PropTypes.number,
	fontSize: PropTypes.number,
};

export default CurrencyDisplay;
