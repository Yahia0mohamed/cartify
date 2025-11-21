import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Product } from '../models/product-data';


@Injectable({ providedIn: 'root' })
export class ProductService{
    private baseUrl = environment.APIURL;
    constructor(private fetch:HttpClient){}
    getProducts(){
        return this.fetch.get<Product[]>(`${this.baseUrl}/products`);
    }
    getProductById(id:number){
        return this.fetch.get<Product>(`${this.baseUrl}/products/${id}`);
    }
    getCategory(){
        return this.fetch.get(`${this.baseUrl}/products/categories`)
    }
    getProductsInCategory(category:string){
        return this.fetch.get(`${this.baseUrl}/products/category/${category}`)
    }
}