function comparePasswords() {
  return passOne.value === passTwo.value;
}

const button = document.querySelector('#button');
const passOne = document.querySelector('#password-one');
const passTwo = document.querySelector('#password-two');

button.addEventListener('click', () => {
  if (comparePasswords()) { console.log(true); } else { console.log(false); }
});
