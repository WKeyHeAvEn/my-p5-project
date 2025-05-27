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
    distX = width / gridWidth;
    distY = height / gridHeight;
    reactorPosition = createVector(0, 0);

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            vectLineList.push(new VectorLine(i * distX, j * distY));
        }
    }

    background(255);
}

function draw() {
    background(255);
    for (let line of vectLineList) {
        line.show(reactorPosition);
    }
}

function mouseMoved() {
    reactorPosition.x = mouseX;
    reactorPosition.y = mouseY;
}

class VectorLine {
    constructor(x, y) {
        this._pos = createVector(x, y);
        this.reactorScaler = 0.05;
    }

    show(reactor) {
        let direction = p5.Vector.sub(reactor, this._pos);
        let distance = direction.mag();
        direction.normalize();
        direction.mult(distance * this.reactorScaler);

        // Drehung für interessante Formen
        let rotated = direction.copy().rotate(PI / 4);

        // Weitere Punkte im Kreis
        let p1 = p5.Vector.add(this._pos, rotated);
        let p2 = p5.Vector.add(this._pos, rotated.copy().rotate(HALF_PI));
        let p3 = p5.Vector.add(this._pos, rotated.copy().rotate(PI));
        let p4 = p5.Vector.add(this._pos, rotated.copy().rotate(PI + HALF_PI));

        noStroke();
        fill(0);

        beginShape();
        curveVertex(p1.x, p1.y);
        curveVertex(p1.x, p1.y);
        curveVertex(p2.x, p2.y);
        curveVertex(p3.x, p3.y);
        curveVertex(p4.x, p4.y);
        curveVertex(p1.x, p1.y);
        curveVertex(p1.x, p1.y);
        endShape();
    }
}
