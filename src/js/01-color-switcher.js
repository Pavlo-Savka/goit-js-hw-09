function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
buttonStop.setAttribute('disabled', 'disabled');

const setAttribute = document.querySelector('button[data-start]')
    .addEventListener('click', () => {
        buttonStart.setAttribute('disabled', 'disabled');
        buttonStop.removeAttribute('disabled');
        body.style.backgroundColor = getRandomHexColor();
        intervalID = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
        }, 1000),
        console.log(intervalID);
    });
  const stop = document.querySelector('button[data-stop]')
      .addEventListener('click', () => {
          buttonStart.removeAttribute('disabled');
          buttonStop.setAttribute('disabled', 'disabled');
          clearInterval(intervalID);
      }); 

