const input = document.getElementById('base64string');
const copyButton = document.getElementById('copy');
const decodeButton = document.getElementById('decode');
const encodeButton = document.getElementById('encode');

function focusInput() {
  input.focus();
  input.select();
}

export function decode() {
  const value = input.value;

  if (value !== '') {
    input.value = window.atob(value);
  }

  focusInput();
}
function encode() {
  const value = input.value;

  if (value !== '') {
    input.value = window.btoa(value);
  }

  focusInput();
}

function copy() {
  focusInput();
  document.execCommand('copy');
}

function addEventListeners() {
  decodeButton.addEventListener('click', decode);
  encodeButton.addEventListener('click', encode);
  copyButton.addEventListener('click', copy);
}

function load() {
  addEventListeners();
  focusInput();
}

load();