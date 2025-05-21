const gridWidth = 20;
const gridHeight = 20;
const screenWidth = 700;
const screenHeight = 700;
let distX;
let distY;
let reactorPosition;
let vectLineList = [];

function setup() {
    createCanvas(screenWidth, screenHeight);
    background(255);
    stroke(0);

    distX = width / gridWidth + 1;
    distY = height / gridHeight + 1;

    reactorPosition = createVector(0, 0);

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            vectLineList.push(new VectorLine(i * distX, j * distY));
        }
    }
}

function draw() {
    background(255);
    for (let i = 0; i < vectLineList.length; i++) {
        vectLineList[i].show(reactorPosition);
    }
}

function mouseMoved() {
    reactorPosition.x = mouseX;
    reactorPosition.y = mouseY;
}

class VectorLine {
    constructor(x, y) {
        this._vector = createVector(0, 5);
        this._pos = createVector(x, y);
        this._vector.add(this._pos);
        this.reactorScaler = 0.07;
    }

    show(reactor) {
        this._reactor = reactor.copy();
        this.reactorDistance = dist(this._reactor.x, this._reactor.y, this._pos.x, this._pos.y);
        this.scaler = this.reactorDistance * this.reactorScaler;

        // Richtung vom Punkt zum Reaktor
        this._reactor.sub(this._pos);
        this._vector = this._reactor.copy();
        this._vector.normalize();
        this._vector.rotate(PI / 4);
        this._vector.mult(this.scaler);
        this._vector.add(this._pos); // Nur einmal skalieren und dann verschieben

        // Berechnung der weiteren Punkte für Form
        this._pointTwo = this._vector.copy();
        this._pointTwo.rotate(PI / 2);
        this._pointTwo.mult(8);

        this._pointTree = this._pointTwo.copy();
        this._pointTree.rotate(PI / 2);

        this._pointFour = this._pointTree.copy();
        this._pointFour.rotate(PI / 2);

        this._pointTwo.add(this._pos);
        this._pointTree.add(this._pos);
        this._pointFour.add(this._pos);

        noStroke();
        fill(0);

        beginShape();
        curveVertex(this._vector.x, this._vector.y);
        curveVertex(this._vector.x, this._vector.y);
        curveVertex(this._pointTwo.x, this._pointTwo.y);
        curveVertex(this._pointTree.x, this._pointTree.y);
        curveVertex(this._pointFour.x, this._pointFour.y);
        curveVertex(this._vector.x, this._vector.y);
        curveVertex(this._vector.x, this._vector.y);
        endShape();
    }
}
