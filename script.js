/* eslint-disable no-restricted-syntax */

const button = document.querySelector('#button');
const inputs = document.querySelectorAll('.input input');
const pOne = document.querySelector('#password-one');
const pTwo = document.querySelector('#password-two');

button.addEventListener('click', () => {
  // check validity
  if (checkPasswords() === false) { return; }
  // submit
  console.log('submit');
});

for (const input of inputs) {
  input.addEventListener('input', () => {
    if (input.checkValidity() === false) { showError(input); } else { hideError(input); }
  });
}

function showError(input) {
  const span = document.querySelector(`#${input.id}+span`);
  span.innerHTML = 'invalid input';
}

function hideError(input) {
  const span = document.querySelector(`#${input.id}+span`);
  span.innerHTML = '';
}

function checkPasswords() {
  if (pOne.value === pTwo.value) {
    return true;
  }
  togglePasswords();
}

function togglePasswords() {
  showError(pOne);
  showError(pTwo);
}
