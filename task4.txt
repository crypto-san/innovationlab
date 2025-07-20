let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers.");
} else {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = "Cannot divide by zero.";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Invalid operator.";
  }

  alert("Result: " + result);
}