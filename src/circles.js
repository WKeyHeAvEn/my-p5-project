const amountOfFromPoints = 5;
const stepSize = 2;
const initRadius = 150;
const mouseAttraction = 0.01;
let centerX;
let centerY;
let x = [];
let y = [];


function setup() {
    createCanvas(windowWidth, windowHeight);

    centerX = width / 2;
    centerY = height / 2;
    const angle = radians(360 / amountOfFromPoints);
    for (let i = 0; i < amountOfFromPoints; i++) {
        x.push(cos(angle * i) * initRadius);
        y.push(sin(angle * i) * initRadius);
    }

    stroke(0, 75);
    strokeWeight(0.5);
    background(255);
    noFill();

}

function draw() {
    centerX += (mouseX - centerX) * mouseAttraction;
    centerY += (mouseY - centerY) * mouseAttraction;

    for (let i = 0; i < amountOfFromPoints; i++) {
        x[i] += random(-stepSize, stepSize);
        y[i] += random(-stepSize, stepSize);
        ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
    }

    beginShape();
    curveVertex(x[0] + centerX, y[0] + centerY);

    for (let i = 0; i < amountOfFromPoints; i++) {
        curveVertex(x[i] + centerX, y[i] + centerY);

    }

    curveVertex(x[0] + centerX, y[0] + centerY);

    curveVertex(
        x[amountOfFromPoints - 1] + centerX,
        y[amountOfFromPoints - 1] + centerY
    );
    endShape();
}
