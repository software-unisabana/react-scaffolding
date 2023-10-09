import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategories } from '../../redux/item/item.selector';

import './breadcrumb.styles.scss';

const BreadCrumb = ({ categories }) => {
	return (
		<div className='breadcrumb-container'>
			{categories.map((category, idx) => (
				<span className='category' key={idx}>
					{category}
					<span>&#10095;</span>
				</span>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	categories: selectCategories,
});

export default connect(mapStateToProps)(BreadCrumb);
