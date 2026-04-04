import Product from "./Product.js";
export default class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return this.price * 1.1;
    }
    // getter method for weight in kg
    get weightInKg() {
        return `${this.weight} kg`;
    }
}
// const item = new PhysicalProduct("H123", "table", 50, 3.5);
// console.log(item.getPriceWithTax().toFixed(2));
// console.log(item.weightInKg);
//# sourceMappingURL=PhysicalProduct.js.map