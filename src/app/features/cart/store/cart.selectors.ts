import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
    selectCartState,
    (state: CartState) => state.items
);

export const selectCartCount = createSelector(
    selectCartState,
    (state: CartState) => state.items.length
);

export const selectCartTotal = createSelector(
    selectCartState,
    (state: CartState) =>
        state.items.reduce((total, item) => total + item.product.price * item.quantity, 0)
);

export const selectCart = createSelector(
    selectCartState,
    (state: CartState) => state.items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity
    }))
);
