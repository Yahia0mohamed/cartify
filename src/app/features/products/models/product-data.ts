export class Product {
    id!: number;
    title!: string;
    price!: number;
    description!: string;
    category!: string;
    image!: string;
    constructor(data?: Partial<Product>) {
        Object.assign(this, data);
    }

    getFormatedPrice(): string {
        return `${this.price.toFixed(2)}`;
    }
    getShortDescription(limit: number = 50): string {
        return this.description.length > limit
            ? this.description.substring(0, limit) + '...'
            : this.description;
    }
    getShortName(limit: number =15):string{
        return this.description.length > limit
            ? this.description.substring(0, limit) + '...'
            : this.description;
    }
}