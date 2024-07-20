var _ = require('lodash')

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var arrow = document.getElementById("arrow");
var angle = 0;

function randomize (color1, color2) {
	var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);

	var color1 = document.querySelector(".color1");
	var color2 = document.querySelector(".color2");

	color1.value = randomColor1;
	color2.value = randomColor2;

	setGradient();
}

function setGradient() {
	body.style.background = "linear-gradient(" + angle + "deg, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function rotateArrow(degrees) {
	arrow.style.transform = "rotate(" + degrees + "deg)";
	angle = degrees;
}

function rotateArrowAndSetGradient() {
	rotateArrow(angle + 22.5);
	setGradient();
}

button.addEventListener("click", randomize);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
arrow.addEventListener("click", rotateArrowAndSetGradient);

// set default gradient on page load
setGradient();

