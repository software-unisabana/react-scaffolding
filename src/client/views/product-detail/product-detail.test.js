import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ProductDetailView from './product-detail.component.jsx';

export const createMockStore = ({ state, reducers }) => {
	const store = createStore(combineReducers(reducers), state);
	return {
		...store,
	};
};

describe('ProductDetailView', () => {
	let wrapper;
	let store;

	beforeEach(() => {
		const mockReducer = (
			state = {
				isFetching: true,
			},
			action
		) => state;

		const mockState = {
			products: {
				isFetching: true,
			},
		};

		store = createMockStore({
			state: mockState,
			reducers: { products: mockReducer },
		});
		const mockProps = {
			match: {
				params: {
					id: 'MLA689389817',
				},
			},
			fetchItemDetailStart: jest.fn(),
			itemDetail: {
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
			isLoading: true,
		};

		wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<ProductDetailView {...mockProps} />
				</Provider>
			</BrowserRouter>
		);
	});
	it('should render SearchView component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
