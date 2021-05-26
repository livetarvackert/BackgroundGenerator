var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizeButton = document.getElementById("randomize");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + 
                            color1.value + ", " + 
                            color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomizeGradient() {
    var min = 0, max = 255;
    var r1 = getRandomInt(min, max),
        r2 = getRandomInt(min, max),
        g1 = getRandomInt(min, max),
        g2 = getRandomInt(min, max),
        b1 = getRandomInt(min, max),
        b2 = getRandomInt(min, max);
    color1.value = "#" + ("0" + r1.toString(16)).substr(-2) + 
                         ("0" + g1.toString(16)).substr(-2) + 
                         ("0" + b1.toString(16)).substr(-2);
    color2.value = "#" + ("0" + r2.toString(16)).substr(-2) + 
                         ("0" + g2.toString(16)).substr(-2) + 
                         ("0" + b2.toString(16)).substr(-2);
    setGradient();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizeButton.addEventListener("click", randomizeGradient);

setGradient();