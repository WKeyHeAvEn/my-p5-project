let North = 1;
let NorthEast = 2;
let East = 3;
let SouthEast = 4;
let South = 5;
let SouthWest = 6;
let West = 7;
let NorthWest = 8;

let x, y;
let stepSize = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    x = width / 2;
    y = height / 2;
    stroke(0, 10);
    strokeWeight(1);
}

function draw() {
    for (let i = 0; i < 500; i++) {
        let dir = floor(random(1, 9));
        let oldX = x;
        let oldY = y;

        if (dir === North) {
            y -= stepSize;
        } else if (dir === NorthEast) {
            x += stepSize;
            y -= stepSize;
        } else if (dir === East) {
            x += stepSize;
        } else if (dir === SouthEast) {
            x += stepSize;
            y += stepSize;
        } else if (dir === South) {
            y += stepSize;
        } else if (dir === SouthWest) {
            x -= stepSize;
            y += stepSize;
        } else if (dir === West) {
            x -= stepSize;
        } else if (dir === NorthWest) {
            x -= stepSize;
            y -= stepSize;
        }

        if (x < 0) x = width;
        if (x > width) x = 0;
        if (y < 0) y = height;
        if (y > height) y = 0;

        line(oldX, oldY, x, y);
    }
}
