const gridWidth = 40;
const gridHeight = 40;
const screenWidth = 700;
const screenHeight = 700;
let distX;
let distY;
let vectLineList = [];

function setup() {
    createCanvas(screenWidth, screenHeight);
    background(255);
    stroke(0);

    distX = width / gridWidth;
    distY = height / gridHeight;

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            vectLineList.push(new VectorLine(i * distX, j * distY));
        }
    }
}

function draw() {
    background(255);
    for (let i = 0; i < vectLineList.length; i++) {
        vectLineList[i].show();
    }
}

class VectorLine {
    constructor(x, y) {
        this._pos = createVector(x, y);
        this._vector = createVector(0, 1);
    }

    show() {
        // Berechne Winkel per Perlin Noise
        let angle = noise(this._pos.x * 0.01, this._pos.y * 0.01, frameCount * 0.01) * TWO_PI;

        // Erstelle einen Vektor aus dem Winkel
        this._vector = p5.Vector.fromAngle(angle);
        this._vector.setMag(10); // Länge des Vektors

        // Zielpunkt berechnen
        let endPoint = p5.Vector.add(this._pos, this._vector);

        // Linie zeichnen
        stroke(0, 100); // leicht transparent
        strokeWeight(1);
        line(this._pos.x, this._pos.y, endPoint.x, endPoint.y);

        // Kreis an der Spitze
        noStroke();
        fill(0);
        ellipse(endPoint.x, endPoint.y, 2, 2);
    }
}
