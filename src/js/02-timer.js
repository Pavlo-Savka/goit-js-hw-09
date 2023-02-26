import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const buttonStart = document.querySelector('button[data-start]');

let selectedDate = 0;
let remainingTime = 0;
let remainingDays = document.querySelector('span[data-days]');
let remainingHours = document.querySelector('span[data-hours]');
let remainingMinutes = document.querySelector('span[data-minutes]');
let remainingSeconds = document.querySelector('span[data-seconds]');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};

function addLeadingZero() {
    let noZeroDays = convertMs(remainingTime).days;
    let noZeroHours = convertMs(remainingTime).hours;
    let noZeroMinutes = convertMs(remainingTime).minutes;
    let noZeroSeconds = convertMs(remainingTime).seconds;
 
    remainingDays.textContent = String(noZeroDays).padStart(2, "0");
    remainingHours.textContent = String(noZeroHours).padStart(2, "0");
    remainingMinutes.textContent = String(noZeroMinutes).padStart(2, "0");
    remainingSeconds.textContent = String(noZeroSeconds).padStart(2, "0");
 };

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        Notiflix.Notify.warning("Please choose a date in the future");
          buttonStart.setAttribute("disabled", "disabled");
          remainingTime = 0;
          clearInterval(id);
          addLeadingZero();
          
}
      if (selectedDates[0] > Date.now()) {
          Notiflix.Notify.info("The timer is set!");
          clearInterval(id);
        buttonStart.removeAttribute('disabled');
        remainingTime = selectedDates[0] - Date.now();
          addLeadingZero();
          buttonStart.addEventListener('click', startCount);
          selectedDate = selectedDates[0];
          return selectedDate;
      }
    },
};
buttonStart.setAttribute("disabled", "disabled");
flatpickr('#datetime-picker', options);
let id = 0;
const startCount = function () {
    Notiflix.Notify.success("The timer is started!");
    buttonStart.setAttribute("disabled", "disabled");
    buttonStart.removeEventListener('click', startCount);
    remainingTime = selectedDate - Date.now();
    id = setInterval(() => {
        remainingTime -= 1000;
        addLeadingZero();
        if (remainingTime < 1000) {
            Notiflix.Notify.success("Congratulations!!! The selected date has arrived!!!");
            clearInterval(id)
        };
    }, 1000);
}

const timer = document.querySelector('.timer');
const field = document.querySelectorAll('.field');
const value = document.querySelectorAll('.value');
const label = document.querySelectorAll('.label');
timer.style.display = 'flex';
timer.style.gap = '50px';
timer.style.justifyContent = 'center';
for (let i = 0; i < value.length; i += 1) {
    field[i].style.display = 'flex';
    field[i].style.backgroundColor = 'grey';
    field[i].style.flexDirection = 'column';
    field[i].justifyContent = 'center';
    field[i].style.fontSize = '20px';
    value[i].style.fontSize = '50px';
    value[i].style.fontWeight = '500';
    value[i].style.textAlign = 'center';
    label[i].style.textAlign = 'center';
    label[i].textContent = label[i].textContent.toUpperCase();  
}