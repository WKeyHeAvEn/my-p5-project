let circles = [];
let maxRadius = 50;
let minRadius = 10;
let maxAttempts = 100;
let failedAttempts = 0;

function setup() {
    createCanvas(800, 600);
    noStroke();
    fill(100, 200, 255, 150);
    frameRate(60); // Optional: Geschwindigkeit kontrollieren
}

function draw() {
    let newCircle = createNewCircle();

    if (newCircle) {
        circles.push(newCircle);
        ellipse(newCircle.x, newCircle.y, newCircle.r * 2);
        failedAttempts = 0; // Reset counter, we had success
    } else {
        failedAttempts++;
    }

    // Stop when too many failed attempts (canvas likely full)
    if (failedAttempts > maxAttempts) {
        noLoop();
        console.log("Canvas full or no more space for new circles.");
    }
}

function createNewCircle() {
    let tries = 0;
    while (tries < 50) {
        let x = random(width);
        let y = random(height);

        // Check if point is inside any existing circle
        let valid = true;
        let minDist = Infinity;

        for (let c of circles) {
            let d = dist(x, y, c.x, c.y);
            if (d < c.r + minRadius) {
                valid = false;
                break;
            }
            let distToEdge = d - c.r;
            if (distToEdge < minDist) {
                minDist = distToEdge;
            }
        }

        if (valid) {
            let r = constrain(minDist, minRadius, maxRadius);
            return { x, y, r };
        }

        tries++;
    }
    return null;
}
