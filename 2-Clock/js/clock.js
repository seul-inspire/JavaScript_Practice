const clockContainer = document.querySelector('.js-clock'),
      colockTitle = clockContainer.querySelector('h1');

function getTime() {
  let now = new Date();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let seconds = now.getSeconds();
  colockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}
function init() {
  setInterval(getTime, 1000);
}
init();