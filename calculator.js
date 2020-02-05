function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '^':
      return Math.pow(a, b);
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '√':
    case 'sqrt':
      return Math.sqrt(a);
    case 'sign':
      return Math.sign(a);
    default:
      break;
  }
}

module.exports = calculate;
