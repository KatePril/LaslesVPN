const themeBtn = document.querySelector('.theme');
const dayIcon = document.querySelector('.day');
const nightIcon = document.querySelector('.night');

const body = document.querySelector('body');
const grey = document.querySelector('.grey');
const statistic = document.querySelector('.statistic');
const footer = document.querySelector('.footer');
const a = document.querySelectorAll('a');
const sub = document.querySelector('.sub');
const forSub = document.querySelector('.forSub');


let theme = true;
themeBtn.addEventListener('click', Theme);

let color = "linear-gradient(0deg, rgba(84,84,84,1) 50%" + "," +
"rgba(0,0,0,1) 50%)";
let colorDay = "linear-gradient(0deg, rgba(248,248,248,1) 50%" + "," +
"rgba(255,255,255,1) 50%)";

function Theme() {
  if(theme) {
    theme = false;

    // themeBtn.style.backgroundColor = "black";
    // nightIcon.style.display = "block";
    // dayIcon.style.display = "none";
    themeBtn.style.backgroundColor = "white";
    nightIcon.style.display = "none";
    dayIcon.style.display = "block";
    themeBtn.style.boxShadow = "0px 0px 10px 0px rgba(255,255,255,0.95)";
    
    body.style.background = "black";
    body.style.color = "white";

    statistic.style.background = "#2e2e2e";
    statistic.style.boxShadow = "0px 3px 46px -7px rgba(255,255,255,0.3)";
    free.style.background = "#2e2e2e";
    standart.style.background = "#2e2e2e";
    premium.style.background = "#2e2e2e";
    grey.style.background = "#545454";
    footer.style.background = "#545454";
    sub.style.background = "#2e2e2e";
    sub.style.boxShadow = "0px 3px 46px rgba(255,255,255,0.2)";
    forSub.style.background = color;

    for(let i = 0; i < a.length; i++) {
      a[i].style.color = "white";
    }
  } else {
    theme = true;

    // themeBtn.style.backgroundColor = "white";
    // nightIcon.style.display = "none";
    // dayIcon.style.display = "block";
    themeBtn.style.backgroundColor = "black";
    nightIcon.style.display = "block";
    dayIcon.style.display = "none";
    themeBtn.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";

    body.style.background = "white";
    body.style.color = "black";

    statistic.style.background = "white";
    statistic.style.boxShadow = "0px 3px 46px -7px rgba(13,16,37,0.1)";
    free.style.background = "white";
    standart.style.background = "white";
    premium.style.background = "white";
    grey.style.background = "#f6f6f6";
    footer.style.background = "#f8f8f8";
    sub.style.background = "white";
    sub.style.boxShadow = "0px 3px 46px rgba(13,16,37,0.1)";
    forSub.style.background = colorDay;

    for(let i = 0; i < a.length; i++) {
      a[i].style.color = "black";
    }
  }
}
