let temp = parseFloat(prompt("Enter temperature:"));
if (temp >= 30) {
  console.log("Hot");
}

let age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let percentage = parseInt(prompt("Enter your percentage:"));
if (percentage >= 85) {
  console.log("Grade: A");
} else if (percentage >= 70) {
  console.log("Grade: B");
} else if (percentage >= 50) {
  console.log("Grade: C");
} else if (percentage >= 35) {
  console.log("Grade: D");
} else if (percentage >= 0) {
  console.log("Grade: F");
} else {
  console.log("Invalid input");
}

let choice = parseInt(prompt("Enter number 1–5 to choose a fruit:"));
switch (choice) {
  case 1: console.log("Apple"); break;
  case 2: console.log("Banana"); break;
  case 3: console.log("Mango"); break;
  case 4: console.log("Orange"); break;
  case 5: console.log("Grapes"); break;
  default: console.log("Invalid choice");
}