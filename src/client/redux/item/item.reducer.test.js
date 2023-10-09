import ItemActionTypes from './item.types';
import itemReducer from './item.reducer';

const initialState = {
	categories: [],
	author: null,
	items: null,
	isFetching: false,
	errorMessage: undefined,
	selectedItem: null,
};

describe('itemReducer', () => {
	it('should return initial state', () => {
		expect(itemReducer(undefined, {})).toEqual(initialState);
	});

	it('should set isFetching to true if fetchItemsStart action', () => {
		expect(
			itemReducer(initialState, { type: ItemActionTypes.FETCH_ITEMS_START })
				.isFetching
		).toBe(true);
	});

	it('should set isFetching to true if fetchItemDetailStart action', () => {
		expect(
			itemReducer(initialState, {
				type: ItemActionTypes.FETCH_ITEM_DETAIL_START,
			}).isFetching
		).toBe(true);
	});

	it('should set isFetching to false and items to payload if fetchItemsSuccess', () => {
		const mockItems = {
			author: {
				name: 'Dani',
				lasname: 'Saavedra',
			},
			categories: [],
			items: [],
		};
		expect(
			itemReducer(initialState, {
				type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
				payload: mockItems,
			})
		).toEqual({
			...initialState,
			isFetching: false,
			items: mockItems.items,
			author: mockItems.author,
			categories: mockItems.categories,
		});
	});

	it('should set isFetching to false and selectedItem to payload if fetchItemDetailSuccess', () => {
		const mockItemDetail = {
			author: {
				name: 'Dani',
				lasname: 'Saavedra',
			},
			item: {
				id: '1',
			},
		};
		expect(
			itemReducer(initialState, {
				type: ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS,
				payload: mockItemDetail,
			})
		).toEqual({
			...initialState,
			isFetching: false,
			author: mockItemDetail.author,
			selectedItem: mockItemDetail.item,
		});
	});

	it('should set isFetching to false and errormessage to payload if fetchFailure', () => {
		expect(
			itemReducer(initialState, {
				type: ItemActionTypes.FETCH_FAILURE,
				payload: 'error',
			})
		).toEqual({
			...initialState,
			isFetching: false,
			errorMessage: 'error',
		});
	});
});
