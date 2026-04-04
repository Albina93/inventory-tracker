import Product from "./models/Product.js";
import PhysicalProduct from "./models/PhysicalProduct.js";
import DigitalProduct from "./models/DigitalProduct.js";
const products = [
    new PhysicalProduct("P111", "Table", 50, 5),
    new DigitalProduct("D222", "E-book", 20, 10),
];
for (const product of products) {
    console.log(product.displayDetails());
    const finalPrice = product.getPriceWithTax();
    console.log(`Here is the final price: $${finalPrice.toFixed(2)}`);
}
//# sourceMappingURL=main.js.map