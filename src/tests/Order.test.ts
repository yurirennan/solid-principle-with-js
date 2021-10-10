import Item from "../models/Item";
import Order from "../models/Order";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new Item("Beer", "Brahma", 10));
  order.addItem(new Item("Whisky", "Jack Daniels", 100));
  order.addItem(new Item("Water", "Crystal", 1));
  const total = order.getTotal();

  expect(total).toBe(111);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new Item("Beer", "Brahma", 10)); // 10%
  order.addItem(new Item("Whisky", "Jack Daniels", 100)); // 20%
  order.addItem(new Item("Water", "Crystal", 1)); // 0
  const taxes = order.getTaxes();

  expect(taxes).toBe(21);
});