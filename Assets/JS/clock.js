setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();
  hrotation = 30*hours + minutes/2;
  mrotation = 6*minutes;
  srotation = 6*seconds;

  hourHand.style.transform = `rotate(${hrotation}deg)`;
  minuteHand.style.transform = `rotate(${mrotation}deg)`;
  secondHand.style.transform = `rotate(${srotation}deg)`;
}


setClock()