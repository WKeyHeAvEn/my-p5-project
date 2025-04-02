let smallSquares = []; // Liste für zufällige Quadrate

function setup() {
    createCanvas(400, 400);
    background(220); // Hintergrund einmal setzen
    drawGrid(); // Raster einmal zeichnen
    generateSmallSquares(); // Einmal zufällige Quadrate generieren
}

function drawGrid() {
    fill(200);
    for (let x = 0; x < 400; x += 100) {
        for (let y = 0; y < 400; y += 100) {
            square(x, y, 90);
        }
    }
}

function generateSmallSquares() {
    for (let x = 0; x < 400; x += 100) {
        for (let y = 0; y < 400; y += 100) {
            let numSquares = int(random(1, 5)); // Zufällige Anzahl von kleinen Quadraten
            for (let i = 0; i < numSquares; i++) {
                let size = random(10, 30); // Zufällige Größe der kleinen Quadrate
                let smallX = x + random(0, 90 - size); // Stelle sicher, dass das Quadrat innerhalb bleibt
                let smallY = y + random(0, 90 - size);

                let color = [random(255), random(255), random(255)]; // Zufällige Farbe

                smallSquares.push({ x: smallX, y: smallY, size: size, color: color });
            }
        }
    }
}

function draw() {
    drawGrid(); // Zeichne das Raster erneut
    for (let sq of smallSquares) {
        fill(sq.color);
        square(sq.x, sq.y, sq.size);
    }
}

function mousePressed() {
    smallSquares = []; // Löscht die alten Quadrate
    generateSmallSquares(); // Erstellt neue zufällige Quadrate
    redraw(); // Erzwingt ein Neuzeichnen
}
