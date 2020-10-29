const form = document.querySelector('.js-form'),
      input = form.querySelector('input'),
      greeting = document.querySelector('.js-greeting');

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(user){
  localStorage.setItem(USER_LS, user);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(user){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `"Hello, ${user}"`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){    
    askForName();
  } else {
    greeting.classList.add(SHOWING_CN);
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}
init();