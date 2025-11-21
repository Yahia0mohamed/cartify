import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AuthModule } from '@features/auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/share.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AuthModule,SharedModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent,
    ProductDetailComponent,
  ]
})
export class ProductsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus);
    library.addIcons(faMinus);
  }
}
