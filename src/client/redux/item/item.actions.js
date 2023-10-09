import ItemActionTypes from './item.types';

export const fetchItemsStart = (payload) => ({
	type: ItemActionTypes.FETCH_ITEMS_START,
	payload,
});

export const fetchItemsSuccess = (items) => ({
	type: ItemActionTypes.FETCH_ITEMS_SUCCESS,
	payload: items,
});

export const fetchItemDetailStart = (payload) => ({
	type: ItemActionTypes.FETCH_ITEM_DETAIL_START,
	payload,
});

export const fetchItemDetailSuccess = (item) => ({
	type: ItemActionTypes.FETCH_ITEM_DETAIL_SUCCESS,
	payload: item,
});

export const fetchFailure = (errorMessage) => ({
	type: ItemActionTypes.FETCH_FAILURE,
	payload: errorMessage,
});
