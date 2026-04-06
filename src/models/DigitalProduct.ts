import Product from "./Product.js";

export default class DigitalProduct extends Product {
  fileSize: number;
  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  override getPriceWithTax(): number {
    return this.price; // no tax, not required for digital
  }

  get sizeInMegabytes(): string {
    return `${this.fileSize} MB`;
  }
}

// const item = new DigitalProduct("H123", "e-book", 50, 15);
// console.log(item.getPriceWithTax());
// console.log(item.sizeInMegabytes);
