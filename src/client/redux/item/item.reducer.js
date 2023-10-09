import ItemActionTypes from './item.types';

const INITIAL_STATE = {
	categories: [],
	author: null,
	items: null,
	isFetching: false,
	errorMessage: undefined,
	selectedItem: null,
};

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.FETCH_ITEM_DETAIL_START:
		case ItemActionTypes.FETCH_ITEMS_START:
			return {
				...state,
				isFetching: true,
				selectedItem: null,
				items: null,
			};
		case ItemActionTypes.FETCH_ITEMS_SUCCESS:
			return {
				...state,
				isFetching: false,
				items: action.payload.items,
				author: action.payload.author,
				categories: action.payload.categories,
			};
		case ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS: {
			return {
				...state,
				isFetching: false,
				author: action.payload.author,
				selectedItem: action.payload.item,
			};
		}
		case ItemActionTypes.FETCH_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default itemReducer;
