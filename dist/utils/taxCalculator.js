import Product from "../models/Product.js";
export default class TaxCalculator {
    static calculateTax(product) {
        return product.price * (Product.taxRate + 1);
    }
}
// const item = new Product("H123", "e-book", 50);
// const finalPrice = TaxCalculator.calculateTax(item);
// console.log(finalPrice.toFixed(2));
//# sourceMappingURL=taxCalculator.js.map