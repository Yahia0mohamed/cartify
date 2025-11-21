import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../models/product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  paginatedProducts: Product[] = [];

  currentPage = 1;
  itemsPerPage = 6; // adjust how many cards per page

  constructor(private service: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.service.getProducts().subscribe(
      {next: (data) => {
        this.products = data.map((p) => new Product(p));
        this.updatePaginatedProducts();
        console.log(this.products,this.paginatedProducts);
        
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }}
    );
  }
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.updatePaginatedProducts();
  }
  private updatePaginatedProducts() {
    if (!this.products || this.products.length === 0) {
      this.paginatedProducts = [];
      return;
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
}
