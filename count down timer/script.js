function updatetime(){
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
const currentDate = new Date();
const diff = newYear - currentDate;
const days = Math.floor(diff / 1000 / 60 / 60 / 24);
document.getElementById("days").innerText = days < 10 ? '0' + days : days;

const hoursLeft = Math.floor((diff / 1000 / 60 / 60) % 24);
document.getElementById("hours").innerText = hoursLeft< 10 ? '0' + hoursLeft : hoursLeft;

const minutesLeft = Math.floor((diff / 1000 / 60) % 60);
document.getElementById("minutes").innerText = minutesLeft< 10 ? '0' + minutesLeft : minutesLeft;

const secondsLeft = Math.floor((diff / 1000) % 60);
document.getElementById("seconds").innerText = secondsLeft< 10 ? '0' + secondsLeft : secondsLeft;
}
setInterval(updatetime, 1000);

const rainbowColors = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];
let colorIndex = 0;
const h1 = document.querySelector('h1');

setInterval(() => {
  h1.style.color = rainbowColors[colorIndex];
  colorIndex = (colorIndex + 1) % rainbowColors.length;
}, 2000);

