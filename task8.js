function add(a, b) {
  console.log("Add: " + (a + b));
}

function sayHello(name) {
  console.log("Hello " + name);
}

function addAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  console.log("Total: " + total);
}

function multiplyAll(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result = result * numbers[i];
  }
  console.log("Multiply: " + result);
}

add(3, 2);
sayHello("Sanjana");
addAll(10, 20, 30);
multiplyAll(2, 3, 4);