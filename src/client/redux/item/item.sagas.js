import { takeLatest, put, call, all } from 'redux-saga/effects';
import ItemActionTypes from './item.types';
import axios from 'axios';
import {
	fetchItemsSuccess,
	fetchItemDetailSuccess,
	fetchFailure,
} from './item.actions';

const baseUrl = 'http://localhost:5004/api/items';

export function* fetchItemsAsync({ payload }) {
	try {
		const items = yield axios.get(baseUrl, { params: { q: payload } });
		yield put(fetchItemsSuccess(items.data));
	} catch (error) {
		yield put(fetchFailure(error.message));
	}
}

export function* fetchItemDetailAsyn({ payload }) {
	try {
		const itemDetail = yield axios.get(`${baseUrl}/${payload}`);
		yield put(fetchItemDetailSuccess(itemDetail.data));
	} catch (error) {
		yield put(fetchFailure(error.message));
	}
}

export function* fetchItemsStart() {
	yield takeLatest(ItemActionTypes.FETCH_ITEMS_START, fetchItemsAsync);
}

export function* fetchItemDetailStart() {
	yield takeLatest(
		ItemActionTypes.FETCH_ITEM_DETAIL_START,
		fetchItemDetailAsyn
	);
}

export function* itemSagas() {
	yield all([call(fetchItemsStart), call(fetchItemDetailStart)]);
}
