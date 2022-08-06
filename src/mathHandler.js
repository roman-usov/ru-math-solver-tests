export default function handleMath({ operand1, operand2, operator }) {
  const number1 = parseFloat(operand1);
  const number2 = parseFloat(operand2);

  switch (operator) {
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '^':
      return number1 ** number2;
    default:
      return NaN;
  }
}
