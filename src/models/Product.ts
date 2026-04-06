export default class Product {
  public static taxRate: number = 0.1;

  public sku: string;
  public name: string;
  public price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) costs $${this.price}`;
  }

  getPriceWithTax(): number {
    return this.price * (Product.taxRate + 1);
  }
}

// const item = new Product("H123", "chair", 7);
// console.log(item.displayDetails());
// console.log(item.getPriceWithTax().toFixed(2));
