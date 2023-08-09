export default function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  }
  if (operator === "-") {
    return a - b;
  }
  if (operator === "*") {
    return a * b;
  }
  if (operator === "/") {
    if (b === 0) {
      return "Invalid Division";
    }
    return a / b;
  }
  return "Invalid operator";
}
