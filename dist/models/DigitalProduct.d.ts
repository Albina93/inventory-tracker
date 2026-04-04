import Product from "./Product.js";
export default class DigitalProduct extends Product {
    fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    get sizeInMegabytes(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map