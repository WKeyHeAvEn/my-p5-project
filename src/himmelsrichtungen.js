let North = 1;
let NorthEast = 2;
let East = 3;
let EastSouth = 4;
let South = 5;
let SouthWest = 6;
let West = 7;
let NorthWest = 8;
let a = [North, NorthEast, East, EastSouth, South, SouthWest, West, NorthWest];
let mouseX, mouseY;
let b;
let c;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    b = random(0, 100);
    c = random(0, 100);
}

function draw() {
    const test = random(1, 9);
    if (test < 0.5) {
        floor(test)
    } else {
        ceil(test)
    }

    if (a[a] === test) {
        ellipse(b, c, 80, 60);

    }

}
