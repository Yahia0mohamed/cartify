import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartItem } from '../models/cart-item.model';
import { Product } from './../../products/models/product-data';


export interface CartState {
    items: CartItem[];
}

export const initialState: CartState = {
    items: []
}

export const cartReducer = createReducer(
    initialState,
    on(CartActions.addItem, (state, { product, quantity }) => {
        const existingItem = state.items.find(i => i.product.id === product.id);
        if (existingItem) {
            return {
                ...state,
                items: state.items.map(i =>
                    i.product.id === product.id
                        ? (() => {
                            const updatedItem = new CartItem(i.product, i.quantity + quantity);
                            return updatedItem;
                        })()
                        : i
                )
            };
        }
        return {
            ...state,
            items: [...state.items, new CartItem(product, quantity)]
        };
    }),
    on(CartActions.clearCart, (state) => ({
        ...state,
        items: []
    })),
    on(CartActions.removeItem, (state, { id }) => ({
        ...state,
        items: state.items.filter(i => i.product.id !== id)
    }))
);