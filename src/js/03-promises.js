import Notiflix from 'notiflix';

const createPromise = (position, delay) => {
   const promise = new Promise((resolve, reject) => {
   const timeout = setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve(`Fulfilled promise  ${position} in ${delay}ms`);
  
        } else {
          reject(`Rejected promise ${position} in ${delay}ms`);
    
        }
      }, delay);
  
    })
  return promise;
  }

let form = document.querySelector('.form');
let delay = 0;
let step = 0;
let amount = 0;
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  delay = (form.delay.value);
  step = (form.step.value);
  amount = form.amount.value;
  for (i = 0; i < amount; i += 1) {
   createPromise(i + 1, step)
    .then(value => {
      Notiflix.Notify.success(value);
      })
    .catch(error => { 
      Notiflix.Notify.failure(error);
    })
  }
}

  