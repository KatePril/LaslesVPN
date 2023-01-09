const free = document.querySelector('#free');
const standart = document.querySelector('#standart');
const premium = document.querySelector('#premium');

const freeBtn = document.querySelector('#freeBtn');
const standartBtn = document.querySelector('#standartBtn');
const premiumBtn = document.querySelector('#premiumBtn');

let freeBtnClicked = false;
let standartBtnClicked = false;
let premiumBtnClicked = false;

freeBtn.addEventListener('click', Free);
standartBtn.addEventListener('click', Standart);
premiumBtn.addEventListener('click', Premium);

function Free() {
  if(freeBtnClicked) {
    freeBtnClicked = false;

    free.style.border = "2px solid #DDDDDD";
    freeBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    freeBtn.style.backgroundColor = "white";
    freeBtn.style.color = "#F53838";
    freeBtn.style.transform = "scale(1)";
  } else {
    freeBtnClicked = true;
    standartBtnClicked = false;
    premiumBtnClicked = false;

    free.style.border = "2px solid #F53838";
    freeBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0.5)";
    freeBtn.style.backgroundColor = "#F53838";
    freeBtn.style.color = "white";
    freeBtn.style.transform = "scale(1.1)";

    standart.style.border = "2px solid #DDDDDD";
    standartBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    standartBtn.style.backgroundColor = "white";
    standartBtn.style.color = "#F53838";
    standartBtn.style.transform = "scale(1)";

    premium.style.border = "2px solid #DDDDDD";
    premiumBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    premiumBtn.style.backgroundColor = "white";
    premiumBtn.style.color = "#F53838";
    premiumBtn.style.transform = "scale(1)";
  }
}

function Standart() {
  if(standartBtnClicked) {
    standartBtnClicked = false;

    standart.style.border = "2px solid #DDDDDD";
    standartBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    standartBtn.style.backgroundColor = "white";
    standartBtn.style.color = "#F53838";
    standartBtn.style.transform = "scale(1)";
  } else {
    freeBtnClicked = false;
    standartBtnClicked = true;
    premiumBtnClicked = false;

    standart.style.border = "2px solid #F53838";
    standartBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0.5)";
    standartBtn.style.backgroundColor = "#F53838";
    standartBtn.style.color = "white";
    standartBtn.style.transform = "scale(1.1)";
  
    free.style.border = "2px solid #DDDDDD";
    freeBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    freeBtn.style.backgroundColor = "white";
    freeBtn.style.color = "#F53838";
    freeBtn.style.transform = "scale(1)";
  
    premium.style.border = "2px solid #DDDDDD";
    premiumBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    premiumBtn.style.backgroundColor = "white";
    premiumBtn.style.color = "#F53838";
    premiumBtn.style.transform = "scale(1)";
  }

  
}

function Premium() {
  if(premiumBtnClicked) {
    premiumBtnClicked = false;

    premium.style.border = "2px solid #DDDDDD";
    premiumBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    premiumBtn.style.backgroundColor = "white";
    premiumBtn.style.color = "#F53838";
    premiumBtn.style.transform = "scale(1)";
  } else {
    freeBtnClicked = false;
    standartBtnClicked = false;
    premiumBtnClicked = true;

    premium.style.border = "2px solid #F53838";
    premiumBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0.5)";
    premiumBtn.style.backgroundColor = "#F53838";
    premiumBtn.style.color = "white";
    premiumBtn.style.transform = "scale(1.1)";
  
    free.style.border = "2px solid #DDDDDD";
    freeBtn.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    freeBtn.style.backgroundColor = "white";
    freeBtn.style.color = "#F53838";
    freeBtn.style.transform = "scale(1)";
  
    standart.style.border = "2px solid #DDDDDD";
    standartBtn.style.boxShadow = "0px 29px 39px -22px rgba(245,56,56,0)";
    standartBtn.style.backgroundColor = "white";
    standartBtn.style.color = "#F53838";
    standartBtn.style.transform = "scale(1)";
  }
}

const btnNav = document.querySelector('#btnNav');
btnNav.addEventListener('click', Nav);
console.log(btnNav);

let navClicked = false;
function Nav() {
  if(navClicked) {
    btnNav.style.boxShadow = "0px 20px 20px rgba(245,56,56,0)";
    btnNav.style.backgroundColor = "white";
    btnNav.style.color = "#F53838";
    navClicked = false;
  } else {
    btnNav.style.boxShadow = "0px 20px 20px rgba(245,56,56,0.5)";
    btnNav.style.backgroundColor = "#F53838";
    btnNav.style.color = "white";
    navClicked = true;
  }
}

const btnSquireFirst = document.querySelector('#squireFirst');
const btnSquireSecond = document.querySelector('#lastBtn');

let btnSquireFirstClicked = false;
let btnSquireSecondClicked = false;

btnSquireFirst.addEventListener('click', SquireFirst);
btnSquireSecond.addEventListener('click', SquireSecond);


function SquireFirst() {
  if (btnSquireFirstClicked) {
    btnSquireFirstClicked = false;
    
    btnSquireFirst.style.boxShadow = "0px 20px 39px rgba(245,56,56,0.5)";
    btnSquireFirst.style.transform = "scale(1)";
  } else {
    btnSquireFirstClicked = true;
    
    btnSquireFirst.style.boxShadow = "0px 20px 39px rgba(245,56,56,0.75)";
    btnSquireFirst.style.transform = "scale(1.1)";
  }
}

function SquireSecond() {
  console.log(btnSquireSecond);
  const w = btnSquireSecond.style.width;
  const h = btnSquireSecond.style.height;

  if (btnSquireSecondClicked) {
    btnSquireSecondClicked = false;
    
    btnSquireSecond.style.boxShadow = "0px 20px 39px rgba(245,56,56,0.5)";
    btnSquireSecond.style.transform = "scale(1)";
    // btnSquireSecond.style.width = "241.25px";
    // btnSquireSecond.style.height = "53.91px";
  } else {
    btnSquireSecondClicked = true;
    
    btnSquireSecond.style.boxShadow = "0px 20px 39px rgba(245,56,56,0.75)";
    btnSquireSecond.style.transform = "scale(1.1)";
    // btnSquireSecond.style.width = "261.25px";
    // btnSquireSecond.style.height = "63.91px";
  }
}