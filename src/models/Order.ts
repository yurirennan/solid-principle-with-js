import Item from "./Item";

export default class Order {
  items: Item[];

  constructor(){
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => {
      acc += item.price;

      return acc;
    }, 0);
  }

  getTaxes() {
    return this.items.reduce((acc, item) => {
      if (item.category === "Beer") {
        acc += (item.price * 10) / 100;
        
      } else if (item.category === "Whisky") {
        acc += (item.price * 20) / 100;
      }

      return acc;
    }, 0);
  }


}