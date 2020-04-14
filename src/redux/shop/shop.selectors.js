import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectColllections = createSelector([selectShop], (shop) => shop.collections);
