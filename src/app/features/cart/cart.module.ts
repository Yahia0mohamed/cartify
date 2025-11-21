import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from './cart-modal/cart-modal.component';

import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartPageComponent } from './pages/cart-page/cart-page.component';



@NgModule({
  declarations: [
    CartModalComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartModalComponent,
  ]
})
export class CartModule { }
