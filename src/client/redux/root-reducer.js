import { combineReducers } from 'redux';

import itemReducer from './item/item.reducer';

const rootReducer = combineReducers({
	products: itemReducer,
});

export default rootReducer;
