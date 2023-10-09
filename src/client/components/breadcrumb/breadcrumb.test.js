import React from 'react';
import { mount } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import BreadCrumb from './breadcrumb.component';

export const createMockStore = ({ state, reducers }) => {
	const store = createStore(combineReducers(reducers), state);
	return {
		...store,
	};
};

describe('BreadCrumb Component', () => {
	let wrapper;
	let store;

	beforeEach(() => {
		const mockReducer = (state = { products: { categories: [] } }, action) =>
			state;
		store = createMockStore({
			state: { products: { categories: ['Auido', 'Audio y video'] } },
			reducers: { products: mockReducer },
		});
		wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<BreadCrumb />
				</Provider>
			</BrowserRouter>
		);
	});
	it('should render BreadCrumb component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should render an equal number of Sections as the Categories', () => {
		expect(wrapper.find("[className='category']").length).toEqual(2);
	});
});
