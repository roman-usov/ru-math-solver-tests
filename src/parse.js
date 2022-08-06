import handleMath from './mathHandler';

const PARENTHESES_REGEX = /\((?<equation>[^()]*)\)/;
const MULTIPLY_DIVIDE_REGEX =
  /(?<operand1>-?[0-9]\d*(\.\d+)?)\s*(?<operator>[*/])\s*(?<operand2>-?[0-9]\d*(\.\d+)?)/;
const EXPONENT_REGEX =
  /(?<operand1>-?[0-9]\d*(\.\d+)?)\s*(?<operator>\^)\s*(?<operand2>-?[0-9]\d*(\.\d+)?)/;
const ADD_SUBTRACT_REGEX =
  /(?<operand1>-?[0-9]\d*(\.\d+)?)\s*(?<operator>(?<!e)[+-])\s*(?<operand2>-?[0-9]\d*(\.\d+)?)/;

export default function calculate(equation) {
  if (equation.match(PARENTHESES_REGEX)) {
    // console.log(equation.match(PARENTHESES_REGEX));
    const subEquation = equation.match(PARENTHESES_REGEX).groups.equation;

    const result = calculate(subEquation);

    const newEquation = equation.replace(PARENTHESES_REGEX, result);

    return calculate(newEquation);
  }

  if (equation.match(EXPONENT_REGEX)) {
    const result = handleMath(equation.match(EXPONENT_REGEX).groups);

    const newEquation = equation.replace(EXPONENT_REGEX, result);

    return calculate(newEquation);
  }

  if (equation.match(MULTIPLY_DIVIDE_REGEX)) {
    const result = handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups);

    const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result);

    return calculate(newEquation);
  }

  if (equation.match(ADD_SUBTRACT_REGEX)) {
    const result = handleMath(equation.match(ADD_SUBTRACT_REGEX).groups);

    const newEquation = equation.replace(ADD_SUBTRACT_REGEX, result);

    return calculate(newEquation);
  }

  return parseFloat(equation);
}
