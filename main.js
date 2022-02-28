const styleswitchertoggler = document.querySelector('.style-switcher-toggler');
styleswitchertoggler.addEventListener('click',()=>{
  document.querySelector('.style-switcher').classList.toggle('open');
})
window.addEventListener('scroll',()=>{
  if(document.querySelector('.style-switcher').classList.contains('open')){
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

/*--------------nav-menu------*/
(()=>{
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".contacted"),
  closeNavBtn = navMenu.querySelector(".menu-bar");
  hamburgerBtn.addEventListener("click",showNavMenu);
  closeNavBtn.addEventListener("click",hideNavMenu);
  function showNavMenu(){
    navMenu.classList.add("open");
  }  
  function hideNavMenu(){
    navMenu.classList.remove("open");
  }
})();

/*---------themechanger-------*/

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')){
      localStorage.setItem("theme","dark");
    }
    else{
      localStorage.setItem("theme","light");
    }
})
function themeMode(){
  if (localStorage.getItem("theme") !== null){
    if (localStorage.getItem("theme") === "light"){
      document.body.classList.remove("dark");
    }
    else{
      document.body.classList.add("dark");
    }
  }
}
themeMode();
function toggle(){
  var newsletter = document.querySelector('.newsletter');
  newsletter.classList.toggle('active')
}

/*---------toggle--------*/

function actionsToggle() {
  var action = document.querySelector('.contactform');
  action.classList.toggle('active');
}
function actionToggle() {
  var action = document.querySelector('.action');
  action.classList.toggle('active');
}
function actionaToggle() {
  var action = document.querySelector('.action-a');
  action.classList.toggle('active');
}
/*---------colortheme----*/

let colorOne = document.querySelector('.color-1');
let colorTwo = document.querySelector('.color-2');
let colorThree = document.querySelector('.color-3');
let colorFour = document.querySelector('.color-4');
let colorFive = document.querySelector('.color-5');
let body = document.querySelector('body');
colorOne.onclick = function() {
  body.classList.toggle('one');
}
colorTwo.onclick = function() {
  body.classList.toggle('two');
}
colorThree.onclick = function() {
  body.classList.toggle('three');
}
colorFour.onclick = function() {
  body.classList.toggle('four');
}
colorFive.onclick = function() {
  body.classList.toggle('five');
}

var element = document.all;
console.log(element)