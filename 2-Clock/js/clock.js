const clockContainer = document.querySelector('.js-clock'),
      colockTitle = clockContainer.querySelector('p');

function getTime() {
  const now = new Date(),
        minutes = now.getMinutes(),
        hours = now.getHours(),
        seconds = now.getSeconds();
  //시,분,초 10보다 작으면 앞에 0을 붙여서 2자리로 맞춰줌
  colockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}//end of getTime()
function init() {
  setInterval(getTime, 1000);
}
init();