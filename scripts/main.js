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
var gal = document.querySelector('.gallery__gallery');








var buttonCalc = document.querySelector('.publicidadCalcas__button');

function botonCalcClick() {
    console.log("hoal");

    return;
}

buttonCalc.addEventListener('click', botonCalcClick);