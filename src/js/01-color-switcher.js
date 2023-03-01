function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let intervalID;
buttonStop.setAttribute('disabled', 'disabled');

buttonStart.addEventListener('click', () => {
  buttonStart.setAttribute('disabled', 'disabled');
  buttonStop.removeAttribute('disabled');
  body.style.backgroundColor = getRandomHexColor();
  intervalID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', () => {
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', 'disabled');
  clearInterval(intervalID);
});
