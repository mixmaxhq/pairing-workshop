function calculate(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "^":
      return Math.pow(a, b);
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "√":
    case "sqrt":
      return Math.sqrt(a);
    default:
      break;
  }
}

module.exports = calculate;
