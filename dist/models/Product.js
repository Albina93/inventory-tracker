export default class Product {
    static taxRate = 0.1;
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
    getPriceWithTax() {
        return this.price * (Product.taxRate + 1);
    }
}
// const item = new Product("H123", "chair", 7);
// console.log(item.displayDetails());
// console.log(item.getPriceWithTax().toFixed(2));
//# sourceMappingURL=Product.js.map