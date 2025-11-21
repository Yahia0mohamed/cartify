import { Product } from "@features/products/models/product-data";

export class CartItem {
    product!: Product;
    private _quantity: number = 0;
    private _totalPriceForItem: number = 0;

    constructor(p:any, q:number =1) {
        this.product = new Product(p);
        this._quantity = q;
        this._totalPriceForItem = this.product.price * this._quantity;
    }
    

    get quantity(): number {
        return this._quantity;
    }

    set quantity(v: number) {
        this._quantity = v;
        this._totalPriceForItem = this.product.price * v;
    }

    get totalPriceForItem(): number {
        return this._totalPriceForItem;
    }
}

export interface SaveCartPayload {
  userId?: number;
  products?: { productId: number; quantity: number }[];
}