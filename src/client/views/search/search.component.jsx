import React, { useEffect } from 'react';
import queryString from 'query-string';

import { connect } from 'react-redux';
import { fetchItemsStart } from '../../redux/item/item.actions';
import ProductGrid from '../../components/product-grid/product-grid.component';

import './search.styles.scss';
import BreadCrumb from '../../components/breadcrumb/breadcrumb.component';

const SearchView = ({ location: { search }, fetchItemsStart }) => {
	useEffect(() => {
		const params = queryString.parse(search);
		fetchItemsStart(params.q);
	});
	return (
		<div className='search-view-container'>
			<BreadCrumb />
			<ProductGrid />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchItemsStart: (searhText) => dispatch(fetchItemsStart(searhText)),
});

export default connect(null, mapDispatchToProps)(SearchView);
