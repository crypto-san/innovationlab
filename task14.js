let productsList = [
  { id: 101, product: "Charger", cost: 150, stock: 3 },
  { id: 102, product: "Mouse", cost: 200, stock: 0 },
  { id: 103, product: "Keyboard", cost: 500, stock: 2 },
  { id: 104, product: "USB Cable", cost: 100, stock: 5 }
];

let inStockItems = productsList.filter(function(prod) {
  return prod.stock > 0;
});
console.log(inStockItems);

let totalAmount = inStockItems.reduce(function(total, prod) {
  return total + prod.cost * prod.stock;
}, 0);
console.log("Total amount:", totalAmount);

let selectedItems = productsList.slice(0, 2);
console.log(selectedItems);

productsList.splice(1, 1);
console.log(productsList);

let updatedList = [...productsList];
updatedList.push({ id: 105, product: "Earphones", cost: 250, stock: 4 });
console.log(updatedList);

let itemDetail = {
  id: 106,
  product: "Power Bank",
  cost: 1200,
  stock: 1,
  showInfo: function() {
    console.log("Product:", this.product);
    console.log("Cost:", this.cost);
    console.log("Stock:", this.stock);
  }
};

itemDetail.showInfo();

let { product, cost, stock } = itemDetail;
console.log(product);
console.log(cost);
console.log(stock);