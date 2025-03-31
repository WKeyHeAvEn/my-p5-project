function setup() {
    background(220);
    createCanvas(400, 400);
    background(220);
    square(300, 300, 90);
    square(200, 300, 90);
    square(100, 300, 90);
    square(0, 300, 90);
    square(0, 200, 90);
    square(0, 100, 90);
    square(0, 0, 90);
    square(100, 200, 90);
    square(100, 100, 90);
    square(100, 0, 90);
    square(200, 200, 90);
    square(200, 100, 90);
    square(200, 0, 90);
    square(300, 200, 90);
    square(300, 100, 90);
    square(300, 0, 90);
}

function draw() {

    for (let x = 0; x < 400; x += 100) {
        for (let y = 0; y < 400; y += 100) {
            // Zeichne das große Quadrat
            fill(200);
            square(x, y, 90);

            // Generiere zufällige Quadrate innerhalb jedes großen Quadrats
            let numSquares = int(random(1, 5)); // Zufällige Anzahl von kleinen Quadraten
            for (let i = 0; i < numSquares; i++) {
                let smallX = x + random(0, 90); // Zufällige X-Position innerhalb des großen Quadrats
                let smallY = y + random(0, 90); // Zufällige Y-Position innerhalb des großen Quadrats
                let size = random(10, 30); // Zufällige Größe der kleinen Quadrate
                fill(random(255), random(255), random(255)); // Zufällige Farbe
                square(smallX, smallY, size); // Zeichne das kleine Quadrat
            }
        }
    }
}
