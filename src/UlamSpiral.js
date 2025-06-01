let gridSize = 101; // ungerade Zahl für Mitte
let cellSize = 5;
let center;

function setup() {
    createCanvas(gridSize * cellSize, gridSize * cellSize);
    background(255);
    noLoop();
    fill(0);
    noStroke();

    center = floor(gridSize / 2);

    let x = center;
    let y = center;
    let num = 1;

    let dx = 1;
    let dy = 0;
    let segmentLength = 1;
    let segmentPassed = 0;
    let segmentChange = 0;

    while (num <= gridSize * gridSize) {
        if (isPrime(num)) {
            ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize * 0.8);
        }

        x += dx;
        y += dy;
        segmentPassed++;

        if (segmentPassed == segmentLength) {
            segmentPassed = 0;
            let temp = dx;
            dx = -dy;
            dy = temp;
            segmentChange++;

            if (segmentChange % 2 == 0) {
                segmentLength++;
            }
        }
        num++;
    }
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
