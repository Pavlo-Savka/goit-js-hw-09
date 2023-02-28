import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const createPromise = (position, step) => {
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve(`Fulfilled promise  ${position} in ${step}ms`);
        } else {
          reject(`Rejected promise ${position} in ${step}ms`);
        }
      }, 
      step);
    })
  return promise;
  };
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
 const delay = parseInt(form.delay.value);
 const step = (form.step.value);
 const amount = form.amount.value;
  for (let i = 0; i < amount; i += 1) {
   createPromise(i + 1, step * i + delay)
    .then(value => {
      Notiflix.Notify.success(value);
      })
    .catch(error => { 
      Notiflix.Notify.failure(error);
    })
  }
};