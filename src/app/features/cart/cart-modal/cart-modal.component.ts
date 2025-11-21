import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { selectCartItems, selectCartTotal } from '../store/cart.selectors';
import { removeItem, clearCart } from '../store/cart.actions';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html'
})
export class CartModalComponent {

  @Output() close = new EventEmitter<void>();
  items$: Observable<CartItem[]>;
  total$: Observable<number>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectCartTotal);
  }

  removeItem(id: number) {
    this.store.dispatch(removeItem({ id }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }

  onClose() {
  this.close.emit();
}
}
