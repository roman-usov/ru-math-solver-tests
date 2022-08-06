import matchingParentheses from './helpers';

/// / Check The Input For Entry Errors ////

export default function hasInputErrors(inputStr) {
  const stringToCheck = inputStr.replaceAll(/\s/g, '');

  const hasNonMathCharacters = /[^\d\^+\/*-\.()]/g.test(stringToCheck);

  if (hasNonMathCharacters) {
    return 'Please, make sure you use integers or decimals with the "." separator and the following operators: +, -, /, *, ^';
  }

  const hasPrecedingOrTrailingOperators = /^[*\/\+\^\.]|[*\/\-\+\^\.]$/g.test(
    stringToCheck
  );

  if (hasPrecedingOrTrailingOperators) {
    return 'Please, remove any trailing operators or other characters that are not numbers your may have';
  }

  const hasMoreThanOneOperator = /[*\/\-\+\^\.]{2,}/g.test(stringToCheck);

  if (hasMoreThanOneOperator) {
    return 'Please, remove any duplicated operators or dots you may have';
  }

  const parentheses = stringToCheck
    .split('')
    .filter((char) => char === '(' || char === ')')
    .join('');

  if (!matchingParentheses(parentheses)) {
    return 'Please, close your parentheses properly.';
  }

  const missingOperation = /\)\(/g.test(stringToCheck);

  if (missingOperation) {
    return 'Please, make sure you have specified operators between expressions in parentheses properly.';
  }

  return false;
}
