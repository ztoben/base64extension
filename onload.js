const input = document.getElementById('base64string');
const copyButton = document.getElementById('copy');
const decodeButton = document.getElementById('decode');

function decode() {
  const value = input.value;

  if (value !== '') {
    input.value = window.atob(value);
  }
}

function copy() {
  console.log('copy');
}

function addEventListeners() {
  decodeButton.addEventListener('click', decode);
  copyButton.addEventListener('click', copy);
}

function load() {
  input.focus();
  addEventListeners();
}

load();