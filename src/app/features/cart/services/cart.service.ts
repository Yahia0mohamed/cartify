import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LocalStorageService } from '@core/services/localStorage.service';
import { Store } from '@ngrx/store';
import { selectCart } from '../store/cart.selectors';
import { SaveCartPayload } from '../models/cart-item.model';
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {
    private baseUrl = environment.APIURL;
    private cart;
    constructor(private fetch: HttpClient, private localStorage: LocalStorageService, private store: Store) {
        this.cart = store.select(selectCart);
    }
    // getCart(id:string){
    //     return this.fetch.post(`${this.baseUrl}/auth/login`);
    // }
    postCart() {
        const userId = Number(this.localStorage.getUserId());

        // `selectCart` gives Observable<{ productId, quantity }[]>
        return this.store.select(selectCart).pipe(
            take(1), // take one snapshot then complete
            map((products) => {
                const payload: SaveCartPayload = {
                    userId,
                    products,
                };
                return payload;
            }),
            switchMap((payload) =>
                this.fetch.post<any>(`${this.baseUrl}/carts`, payload)
            )
        );
    }
}