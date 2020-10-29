const clockContainer = document.querySelector('.js-clock'),
      colockTitle = clockContainer.querySelector('h1');

function getTime() {
  const now = new Date(),
        minutes = now.getMinutes(),
        hours = now.getHours(),
        seconds = now.getSeconds();
  colockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}//end of getTime()
function init() {
  setInterval(getTime, 1000);
}
init();