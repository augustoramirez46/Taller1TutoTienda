var hambtn = document.querySelector('.hamburguerbtn');
var mainnav = document.querySelector('.nav');

var handleHamClick = function (event) {
    console.log(event);
    mainnav.classList.toggle('nav--mobile');
}

hambtn.addEventListener('click', handleHamClick);

function handleWindowResize(event) {
    if (window.innerWidth > 575.98) {
        mainnav.classList.remove('nav--mobile');
    }
}

window.addEventListener('resize', handleWindowResize);

var btnR = document.querySelector('.gallery__bton--right');
var btnL = document.querySelector('.gallery__bton--left');
var strip = document.querySelector('.gallery__strip');
var slider = document.querySelector('.gallery__gallery');
var pX = 0;
var width = slider.offsetWidth;

function handleBtnNextClick() {
    var quantity = strip.children.length;
    if (pX > -width * (quantity - 1)) {
        pX -= width;
    } else {
        pX = 0;
    }

    strip.style.transform = 'translate(' + pX + 'px, 0px)';
}

btnR.addEventListener('click', handleBtnNextClick);

function handleBtnPrevClick() {
    var quantity = strip.children.length;
    if (pX < 0) {
        pX += width;
    } else {
        pX = -width * (quantity - 1);
    }

    strip.style.transform = 'translate(' + pX + 'px, 0px)';
}

btnL.addEventListener('click', handleBtnPrevClick);







var buttonCalc = document.querySelector('.publicidadCalcas__button');

function botonCalcClick() {
    console.log("hoal");

    return;
}

buttonCalc.addEventListener('click', botonCalcClick);