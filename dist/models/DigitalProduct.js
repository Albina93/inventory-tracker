import Product from "./Product.js";
export default class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price; // no tax, not required for digital
    }
    get sizeInMegabytes() {
        return `${this.fileSize} MB`;
    }
}
// const item = new DigitalProduct("H123", "e-book", 50, 15);
// console.log(item.getPriceWithTax());
// console.log(item.sizeInMegabytes);
//# sourceMappingURL=DigitalProduct.js.map