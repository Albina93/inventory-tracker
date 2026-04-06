"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price}`;
    }
    getPriceWithTax(taxRate) {
        return this.price * (taxRate + 1);
    }
}
const fruit = new Product("apple", "H123", 7);
console.log(fruit.displayDetails);
//# sourceMappingURL=Product.js.map