import { Component, Input } from '@angular/core';
import { Product } from '../models/product-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor(private router:Router){}
  onCardClick(){
    const id:number=this.product.id;
    this.router.navigate([`productDetails/${id}`])
  }
}
