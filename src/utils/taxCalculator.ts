import Product from "../models/Product.js";

export default class TaxCalculator {
  static calculateTax(product: Product): number {
    return product.price * (Product.taxRate + 1);
  }
}

// const item = new Product("H123", "e-book", 50);
// const finalPrice = TaxCalculator.calculateTax(item);
// console.log(finalPrice.toFixed(2));
