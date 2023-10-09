import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ProductGrid from './product-grid.component';
import ProductPreview from '../product-preview/product-preview.component';

export const createMockStore = ({ state, reducers }) => {
	const store = createStore(combineReducers(reducers), state);
	return {
		...store,
	};
};

describe('ProductGrid Component', () => {
	let wrapper;
	let store;
	beforeEach(() => {
		const mockReducer = (
			state = {
				isFetching: true,
				items: [],
			},
			action
		) => state;
		const mockState = {
			products: {
				items: [
					{
						id: 'MLA689325634',
						title: 'Ps5',
						price: {
							currency: 'ARS',
							amount: 38500,
							decimals: 2,
						},
						picture: '',
						condition: 'new',
						free_shipping: false,
						sold_quantity: 5,
						description: 'ps%',
					},
				],
				isFetching: false,
			},
		};
		store = createMockStore({
			state: mockState,
			reducers: { products: mockReducer },
		});
		wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<ProductGrid />
				</Provider>
			</BrowserRouter>
		);
	});
	it('should render ProductPreview component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should render an equal number of ProductPreview components as the Items prop', () => {
		expect(wrapper.find(ProductPreview).length).toEqual(1);
	});
});
