import { createSelector } from 'reselect';

const selectProduct = (state) => state.products;

export const selectIsItemsFetching = createSelector(
	[selectProduct],
	(products) => products.isFetching
);

export const selectProductPreview = createSelector(
	[selectProduct],
	(products) => products?.items?.filter((item, idx) => idx < 4) ?? []
);

export const selectIsItemsLoaded = createSelector([selectProduct], (products) =>
	products ? !!products.items : false
);

export const selectCategories = createSelector(
	[selectProduct],
	(products) => products.categories ?? []
);

export const selectItemDetail = createSelector(
	[selectProduct],
	(products) => products.selectedItem
);

export const selectIsItemDetailLoaded = createSelector(
	[selectProduct],
	(products) => (products ? !!products.selectedItem : false)
);
