const gridWidth = 40;
const gridHeight = 40;
const screenWidth = 700;
const screenHeight = 700;
var distX;
var distY;
var reactorPosition;
var vectLineList = [];


function setup() {
    reactorPosition = createVector(0, 0);
    createCanvas(700, 700);
    background(255);
    stroke(0);

    let distX = width / gridWidth + 1;
    let distY = height / gridHeight + 1;

    for (var i = 0; i < gridWidth; i++) {
        for (var j = 0; j < gridHeight; j++) {
            vectLineList.push(new VectorLine(i * distX, j * distY));
        }
    }

}


function draw() {
    background(255);
    for (var i = 0; i < vectLineList.length; i++) {
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
        this._reactor.sub(this._pos);
        this._vector = this._reactor.copy();
        this._vector.normalize();
        this._vector.rotate(PI / 4);
        this._vector.mult(this.scaler);
        this._vector.add(this._pos);
        //
        line(this._pos.x, this._pos.y, this._vector.x, this._vector.y);
        ellipse(this._vector.x, this._vector.y, 5, 5);
    }

}
