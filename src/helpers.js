/// / Checks If Parentheses Are Properly Paired ////

export default function matchingParentheses(string) {
  const stack = [];
  const OPENING_BRACKETS = ['('];
  const CLOSING_BRACKETS = [')'];

  for (let i = 0; i < string.length; i++) {
    if (OPENING_BRACKETS.includes(string[i])) stack.push(string[i]);
    if (CLOSING_BRACKETS.includes(string[i])) {
      const lastOpenParenthesis = stack.pop();

      if (string[i] === ')' && lastOpenParenthesis !== '(') return false;
    }
  }

  return stack.length === 0;
}
