import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '@features/cart/store/cart.reducer';
import { CartModule } from '@features/cart/cart.module';
import { ToasterComponent } from './components/toaster/toaster.component';

@NgModule({
  declarations: [NavbarComponent, PaginationComponent, ToasterComponent],
  imports: [CommonModule,FontAwesomeModule, StoreModule.forRoot({cart: cartReducer}), CartModule],
  exports: [NavbarComponent, PaginationComponent, ToasterComponent]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faRightFromBracket);
  }
}
