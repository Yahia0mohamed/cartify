import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { Product } from '../../models/product-data';
import { addItem } from '@features/cart/store/cart.actions';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  quantity: number = 1;
  activeTab: string = '';
  private id: number;
  protected loading: boolean = true;
  constructor(private aRoute: ActivatedRoute, private service: ProductService, private router: Router, private store: Store) { }
  ngOnInit(): void {
    this.aRoute.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          this.loading = true;
          return this.service.getProductById(id);
        })
      )
      .subscribe({
        next: (data) => {
          this.product = new Product(data);
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching product', err);
          this.loading = false;
        },
      });
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  addToCart(): void {
    this.store.dispatch(addItem({ product: this.product, quantity: this.quantity }));
  }
  decreaseQuantity(): void {
    if (this.quantity <= 1) {
      this.quantity = 1;
    } else {
      this.quantity -= 1;
    }
  }
  increaseQuantity(): void {
    this.quantity += 1;
  }
}
