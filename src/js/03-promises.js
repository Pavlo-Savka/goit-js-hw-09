import Notiflix from 'notiflix';

let form = document.querySelector('.form');
let delay = 0;
let step = 0;
let amount = 0;
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
delay = parseInt(form.delay.value);
step = form.step.value;
amount = form.amount.value;
  const timeout = setTimeout(createPromise(), 10000);

//createPromise(amount, step)
};

function createPromise(i, delay) {
  for (i = 0; i < amount; i += 1) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(Notiflix.Notify.success(`Fulfilled promise  ${i + 1} in ${delay}ms`), delay);
    } else {
      setTimeout(Notiflix.Notify.failure(`Rejected promise ${i + 1} in ${delay}ms`), delay);
    }
  }
}