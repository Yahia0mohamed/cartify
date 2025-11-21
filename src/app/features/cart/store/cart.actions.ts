import { createAction, props } from '@ngrx/store';
import { Product } from '@features/products/models/product-data';


export const addItem = createAction(
    '[Cart] Add Item',
    props<{product:Product; quantity:number}>()
);

export const removeItem = createAction(
    '[Cart] Remove Item',
    props<{id:number}>()
);

export const clearCart = createAction('[Cart] Clear');
export const getCart = createAction('[Cart] Get');