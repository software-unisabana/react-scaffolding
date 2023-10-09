import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchView from './search.component';

export const createMockStore = ({ state, reducers }) => {
	const store = createStore(combineReducers(reducers), state);
	return {
		...store,
	};
};

describe('SearchView', () => {
	let wrapper;
	let mockFetchItemsStart;
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

		mockFetchItemsStart = jest.fn();

		store = createMockStore({
			state: mockState,
			reducers: { products: mockReducer },
		});

		const mockLocation = {
			search: 'ipod',
		};

		const mockProps = {
			location: mockLocation,
			fetchItemsStart: mockFetchItemsStart,
		};

		wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<SearchView {...mockProps} />
				</Provider>
			</BrowserRouter>
		);
	});
	it('should render SearchView component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
