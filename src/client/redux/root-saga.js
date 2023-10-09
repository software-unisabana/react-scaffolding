import { all, call } from 'redux-saga/effects';

import { itemSagas } from './item/item.sagas';

export default function* rootSaga() {
	yield all([call(itemSagas)]);
}
