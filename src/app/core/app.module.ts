import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@features/auth/auth.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCartPlus, faCartShopping, faRegistered, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { ProductsModule } from '@features/products/products.module';
import { SharedModule } from '@shared/share.module';
import { StoreModule } from '@ngrx/store';
import { CartModule } from '@features/cart/cart.module';
import { cartReducer } from '@features/cart/store/cart.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    FontAwesomeModule,
    ProductsModule, SharedModule, StoreModule.forRoot({cart: cartReducer}),
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCartShopping);
    library.addIcons(faCartPlus);
    library.addIcons(faRightToBracket);
    library.addIcons(faRegistered);
  }
}
