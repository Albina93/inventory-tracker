import Product from "./Product.js";

export default class PhysicalProduct extends Product {
  public weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  override getPriceWithTax(): number {
    return this.price * 1.1;
  }

  // getter method for weight in kg
  get weightInKg(): string {
    return `${this.weight} kg`;
  }
}

// const item = new PhysicalProduct("H123", "table", 50, 3.5);
// console.log(item.getPriceWithTax().toFixed(2));
// console.log(item.weightInKg);
