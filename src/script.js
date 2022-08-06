import calculate from './parse';
import hasInputErrors from './errorHandler';

const formEl = document.querySelector('#equation-form');
const inputEl = document.querySelector('#equation');
const resultEl = document.querySelector('#results');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = inputEl.value;

  const error = hasInputErrors(input);

  if (error) {
    resultEl.textContent = error;
    return;
  }

  resultEl.textContent = calculate(input);
});
