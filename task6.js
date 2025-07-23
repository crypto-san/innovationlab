let count = 1;
while (count <= 3) {
  console.log(count);
  count++;
}

let input;
do {
  input = prompt("Enter go:");
} while (input !== "go");
console.log("Okay");

let limit = parseInt(prompt("Enter a number:"));
let result = 0;
for (let num = 1; num <= limit; num++) {
  result = result + num;
}
console.log("Result is", result);

for (let a = 1; a <= 2; a++) {
  for (let b = 1; b <= 3; b++) {
    console.log(a + " x " + b + " = " + (a * b));
  }
}