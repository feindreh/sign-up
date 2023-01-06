/* eslint-disable no-restricted-syntax */
function comparePasswords() {
  // returns true if passwords are the same
  return passOne.value === passTwo.value;
}

function checkValid() {
  // if inputs are valid => return true else return false
  const inputs = document.querySelectorAll('.input input');

  for (const input of inputs) {
    if (input.checkValidity() !== true) { return false; }
  }
  return true;
}

const button = document.querySelector('#button');
const passOne = document.querySelector('#password-one');
const passTwo = document.querySelector('#password-two');
const form = document.querySelector('#theForm');

button.addEventListener('click', () => {
  if (comparePasswords()) { console.log('good passwords'); } else { console.log('wrong poasswords'); return; }
  if (checkValid() !== true) {
    console.log('invalid inputs'); return;
  }console.log('valid input');
  console.log('submit');
  // form.submit();
});
