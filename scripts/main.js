var hambtn = document.querySelector('.hamburguerbtn');
var mainnav = document.querySelector('.nav');

var handleHamClick = function (event) {
    console.log(event);
    mainnav.classList.toggle('nav--mobile');
}

hambtn.addEventListener('click', handleHamClick);











var buttonCalc = document.querySelector('.publicidadCalcas__button');

function botonCalcClick() {
    console.log("hoal");

    return;
}

buttonCalc.addEventListener('click', botonCalcClick);