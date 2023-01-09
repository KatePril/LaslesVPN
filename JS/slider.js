let slides = document.querySelectorAll(".slide");
console.log(slides);
let slidesContent = document.querySelectorAll(".slideContent");
let points = document.querySelectorAll(".point");
let arrowLeft = document.querySelector('#arrowLeft');
let arrowRight = document.querySelector('#arrowRight');
let current = 0;
let order = 0;

let whiteLeft = document.querySelector('.arrowWhiteLeft');
let whiteRight = document.querySelector('.arrowWhiteRight');
let redLeft = document.querySelector('.arrowRedLeft');
let redRight = document.querySelector('.arrowRedRight');

function reset() {
    for (let i = 0; i < slides.length; i++){
        // slides[i].style.order = "0";
        slidesContent[i].style.border = "2px solid #DDDDDD";
        points[i].style.width = "15px";
        points[i].style.background = "#DDE0E4";
    }
}

function startSlides() {
    reset();
    slidesContent[current].style.border = "2px solid #F53838";
    points[current].style.width = "45px";
    points[current].style.background = "#F53838";
}

startSlides();

arrowRight.addEventListener('click', goRight);
arrowRight.addEventListener('mouseover', overRight);
arrowRight.addEventListener('mouseout', outRight);

function overRight() {
    arrowRight.style.background = "#F53838";
    whiteRight.style.display = "block";
    redRight.style.display = "none";
}
function outRight() {
    arrowRight.style.background = "white";
    redRight.style.display = "block";
    whiteRight.style.display = "none";
}

function goRight(){
    reset();
    // console.log(current);
    let tmp = order+1;
    let tmpC = tmp.toString();
    slides[current].style.order = tmpC;
    if (current === (slides.length-1)) {
        for (let i = 0; i < slides.length; i++){
            slides[i].style.order = "0";
        }
        current = 0;
        slidesContent[current].style.border = "2px solid #F53838";
        points[current].style.width = "45px";
        points[current].style.background = "#F53838";
    } else {
        current++; 
        slidesContent[current].style.border = "2px solid #F53838";
        points[current].style.width = "45px";
        points[current].style.background = "#F53838";
    }
    
}

arrowLeft.addEventListener('click', goLeft);
arrowLeft.addEventListener('mouseover', overLeft);
arrowLeft.addEventListener('mouseout', outLeft);

function overLeft() {
    arrowLeft.style.background = "#F53838";
    whiteLeft.style.display = "block";
    redLeft.style.display = "none";
}
function outLeft() {
    arrowLeft.style.background = "white";
    redLeft.style.display = "block";
    whiteLeft.style.display = "none";
}

function goLeft(){
    reset();
    console.log(current);
    let tmp = order-1;
    let tmpC = tmp.toString();
    slides[current].style.order = tmpC;
    if (current === 0) {
        for (let i = 0; i < slides.length; i++){
            slides[i].style.order = "1";
        }
        current = slides.length - 1;
        slidesContent[current-3].style.border = "2px solid #F53838";
        points[current-3].style.width = "45px";
        points[current-3].style.background = "#F53838";
    } else {
        current--; 
        slidesContent[current+1].style.border = "2px solid #F53838";
        points[current+1].style.width = "45px";
        points[current+1].style.background = "#F53838";
    }
    
}

points[0].addEventListener('click', Point1);
points[1].addEventListener('click', Point2);
points[2].addEventListener('click', Point3);
points[3].addEventListener('click', Point4);

function Point1(){
    reset();
    points[0].style.width = "45px";
    points[0].style.background = "#F53838";
    for (let i = 0; i < slides.length; i++){
        if(i === 0) {
            slidesContent[i].style.border = "2px solid #F53838";
            let tmp = order;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        } else {
            let tmp = order + 1;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        }
    }
}

function Point2(){
    reset();
    points[1].style.width = "45px";
    points[1].style.background = "#F53838";
    for (let i = 0; i < slides.length; i++){
        if(i === 1) {
            slidesContent[i].style.border = "2px solid #F53838";
            let tmp = order;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        } else if (i > 1){
            let tmp = order ;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        } else {
            let tmp = order+1;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        }
    }
}


// function Point2(){
//     reset();
//     points[1].style.width = "45px";
//     points[1].style.background = "#F53838";
//     for (let i = 0; i < slides.length; i++){
//         if(i === 1) {
//             slidesContent[i].style.border = "2px solid #F53838";
//             let tmp = order;
//             let tmpC = tmp.toString();
//             slides[i].style.order = tmpC;
//         } else if (i > 1){
//             let tmp = order + 1;
//             let tmpC = tmp.toString();
//             slides[i].style.order = tmpC;
//         } else {
//             let tmp = order + 2;
//             let tmpC = tmp.toString();
//             slides[i].style.order = tmpC;
//         }
//     }
// }

function Point3(){
    reset();
    points[2].style.width = "45px";
    points[2].style.background = "#F53838";
    for (let i = 0; i < slides.length; i++){
        if(i === 2) {
            slidesContent[i].style.border = "2px solid #F53838";
            let tmp = order;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        } else if (i > 2){
            let tmp = order + 1;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        } else {
            let tmp = order + 2;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        }
    }
}

function Point4(){
    reset();
    points[3].style.width = "45px";
    points[3].style.background = "#F53838";
    for (let i = 0; i < slides.length; i++){
        if(i === 3) {
            slidesContent[i].style.border = "2px solid #F53838";
            let tmp = order;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        }  else if (i > 3){
            let tmp = order + 1;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        } else {
            let tmp = order + 2;
            let tmpC = tmp.toString();
            slides[i].style.order = tmpC;
        }
    }
}